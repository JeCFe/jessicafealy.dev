import { ContentImage, MarkdownContent, Typography } from "@/components";
import { getBlogPostBySlug, getPublishedBlogPosts } from "@/content";
import { blogData, siteData } from "@/data";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export const generateStaticParams = () => {
  const posts = getPublishedBlogPosts();
  if (posts.length === 0) return [{ slug: "_empty" }];
  return posts.map(({ slug }) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: BlogPostPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | ${siteData.hero.name}`,
    description: post.summary,
  };
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 rounded-sm font-mono text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300 transition-colors hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        {blogData.backLinkLabel}
      </Link>

      <article className="mt-12">
        <header>
          <Typography as="h1" className="pb-2 leading-[1.08]">
            {post.title}
          </Typography>
          <MarkdownContent content={post.summary} />
          <time
            dateTime={post.date}
            className="mt-5 block font-mono text-sm text-slate-400"
          >
            {formatDate(post.date)}
          </time>
        </header>
        {post.heroImage && (
          <figure className="mt-12">
            <ContentImage
              src={post.heroImage}
              alt={post.heroAlt ?? ""}
              frameClassName="aspect-[462/316] w-full rounded-3xl"
              className="object-contain"
              priority
              loading="eager"
            />
            {post.heroCaption && (
              <Typography as="figcaption" className="mt-3">
                <MarkdownContent content={post.heroCaption} variant="inline" />
              </Typography>
            )}
          </figure>
        )}
        <div className="mt-12">
          {post.content.map((block, index) => {
            if (block.type === "markdown") {
              return (
                <MarkdownContent
                  content={block.content}
                  key={`markdown-${index}`}
                />
              );
            }

            return (
              <figure className="mt-8" key={`image-${index}`}>
                <ContentImage
                  src={block.image}
                  alt={block.alt}
                  frameClassName="aspect-[4/3] w-full rounded-2xl"
                />
                <Typography as="figcaption" className="mt-3">
                  {block.caption}
                </Typography>
              </figure>
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
