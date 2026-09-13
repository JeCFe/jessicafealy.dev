import {
  ContentImage,
  ExternalLink,
  MarkdownContent,
  ProjectContent,
  Typography,
} from "@/components";
import { getProjectBySlug, getProjectWriteUps } from "@/content";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export const generateStaticParams = () => {
  const writeUps = getProjectWriteUps();

  // Static exports require at least one value for every dynamic route.
  if (writeUps.length === 0) return [{ slug: "_empty" }];

  return writeUps.map(({ slug }) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: ProjectPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.title} | Jessica Fealy`,
    description: project.pageSummary ?? project.carouselSummary,
  };
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-24">
      <Link
        href="/#professional-projects"
        className="inline-flex items-center gap-2 rounded-sm font-mono text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300 transition-colors hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        Professional projects
      </Link>

      <article className="mt-12">
        <header>
          <Typography as="h1" className="pb-2">
            {project.title}
          </Typography>
          {project.pageSummary && (
            <MarkdownContent content={project.pageSummary} />
          )}
          {project.linkHref && (
            <ExternalLink
              href={project.linkHref}
              className="mt-7 inline-block rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-cyan-200 !no-underline hover:border-cyan-300"
            >
              {project.linkLabel ?? "Visit project"}
            </ExternalLink>
          )}
        </header>

        {project.image ? (
          <ContentImage
            src={project.image}
            alt={project.imageAlt ?? ""}
            frameClassName="mt-12 aspect-[8/5] w-full rounded-3xl"
            priority
            sizes="(min-width: 1024px) 896px, (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
          />
        ) : null}

        <ProjectContent blocks={project.content ?? []} />
      </article>
    </div>
  );
};

export default ProjectPage;
