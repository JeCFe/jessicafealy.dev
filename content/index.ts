import fs from "node:fs";
import path from "node:path";
import type { ProfessionalProject } from "../data/professional-projects/types";

const projectDirectory = path.join(
  process.cwd(),
  "data",
  "professional-projects",
);

const validateFields = (
  value: unknown,
  required: string[],
  optional: string[],
  source: string,
): Record<string, unknown> => {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${source}: expected an object.`);
  }

  const fields = value as Record<string, unknown>;
  for (const name of required) {
    const field = fields[name];
    if (typeof field !== "string" || !field.trim()) {
      throw new Error(`${source}: ${name} is required.`);
    }
  }
  for (const name of optional) {
    const field = fields[name];
    if (field != null && typeof field !== "string") {
      throw new Error(`${source}: ${name} must be a string.`);
    }
    fields[name] = typeof field === "string" ? field.trim() || null : null;
  }
  return fields;
};

const readProject = (filename: string): ProfessionalProject => {
  const project = validateFields(
    JSON.parse(fs.readFileSync(path.join(projectDirectory, filename), "utf8")),
    ["title", "slug", "carouselSummary"],
    ["image", "imageAlt", "pageSummary", "linkLabel", "linkHref"],
    filename,
  );

  if (
    project.slug !== path.basename(filename, ".json") ||
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug as string)
  ) {
    throw new Error(
      `${filename}: slug must match the filename and use lowercase words and hyphens.`,
    );
  }
  project.status ??= "draft";
  project.order ??= 0;
  project.content ??= [];
  if (project.status !== "draft" && project.status !== "published") {
    throw new Error(`${filename}: status must be draft or published.`);
  }
  if (typeof project.order !== "number" || !Number.isFinite(project.order)) {
    throw new Error(`${filename}: order must be a number.`);
  }
  for (const name of ["showInCarousel", "hasWriteUp"]) {
    project[name] ??= false;
    if (typeof project[name] !== "boolean") {
      throw new Error(`${filename}: ${name} must be a boolean.`);
    }
  }
  if (project.image && !project.imageAlt) {
    throw new Error(`${filename}: imageAlt is required when image is set.`);
  }
  if (project.linkLabel && !project.linkHref) {
    throw new Error(`${filename}: linkHref is required when linkLabel is set.`);
  }
  if (!Array.isArray(project.content)) {
    throw new Error(`${filename}: content must be a list.`);
  }
  project.content.forEach((value: unknown, index: number) => {
    const source = `${filename}: content block ${index + 1}`;
    const block = validateFields(value, ["type"], [], source);
    switch (block.type) {
      case "markdown":
        validateFields(block, ["content"], [], source);
        break;
      case "image":
        validateFields(block, ["image", "alt", "caption"], [], source);
        break;
      case "video":
        validateFields(block, ["video", "caption"], ["poster"], source);
        break;
      default:
        throw new Error(`${source}: unknown block type.`);
    }
  });

  return project as ProfessionalProject;
};

export const getProfessionalProjects = () =>
  fs
    .readdirSync(projectDirectory)
    .filter((filename) => filename.endsWith(".json"))
    .map(readProject)
    .sort((a, b) => b.order - a.order);

export const getCarouselProjects = () =>
  getProfessionalProjects().filter(
    ({ status, showInCarousel }) => status === "published" && showInCarousel,
  );

export const getProjectWriteUps = () =>
  getProfessionalProjects().filter(
    ({ status, hasWriteUp }) => status === "published" && hasWriteUp,
  );

export const getProjectBySlug = (slug: string) =>
  getProjectWriteUps().find((project) => project.slug === slug);

export type {
  ProfessionalProject,
  ProfessionalProjectBlock,
} from "../data/professional-projects/types";
