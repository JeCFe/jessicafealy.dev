export type ProjectStatus = "draft" | "published";

export type MarkdownBlock = {
  type: "markdown";
  content: string;
};

export type ImageBlock = {
  type: "image";
  image: string;
  alt: string;
  caption: string;
};

export type VideoBlock = {
  type: "video";
  video: string;
  poster?: string | null;
  caption: string;
};

export type ProjectMetadata = {
  role?: string | null;
  scope?: string | null;
  techStack?: string | null;
};

export type ProfessionalProjectBlock = MarkdownBlock | ImageBlock | VideoBlock;

export type ProfessionalProject = {
  title: string;
  slug: string;
  carouselSummary: string;
  image?: string | null;
  imageAlt?: string | null;
  status: ProjectStatus;
  showInCarousel: boolean;
  order: number;
  hasWriteUp: boolean;
  showTableOfContents: boolean;
  metadata?: ProjectMetadata | null;
  pageSummary?: string | null;
  linkLabel?: string | null;
  linkHref?: string | null;
  content?: ProfessionalProjectBlock[];
};
