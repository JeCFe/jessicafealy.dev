export type BlogPostStatus = "draft" | "published";

export type BlogMarkdownBlock = {
  type: "markdown";
  content: string;
};

export type BlogImageBlock = {
  type: "image";
  image: string;
  alt: string;
  caption: string;
};

export type BlogPostBlock = BlogMarkdownBlock | BlogImageBlock;

export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  summary: string;
  heroImage?: string | null;
  heroAlt?: string | null;
  heroCaption?: string | null;
  content: BlogPostBlock[];
  status: BlogPostStatus;
};
