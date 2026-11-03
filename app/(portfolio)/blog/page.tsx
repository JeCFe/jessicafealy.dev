import { ContentCard, MarkdownContent, Typography } from "@/components";
import { getPublishedBlogPosts } from "@/content";
import { blogData, siteData } from "@/data";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${blogData.heading} | ${siteData.hero.name}`,
  description: blogData.intro,
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));

const BlogPage = () => {
  const posts = getPublishedBlogPosts();

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-24">
      <header className="mb-8 sm:mb-10">
        <Typography as="h1" className="pb-3">
          {blogData.heading}
        </Typography>
        <Typography className="max-w-2xl text-lg">{blogData.intro}</Typography>
      </header>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            <ContentCard
              heading={post.title}
              interactive
              eyebrow={
                <time
                  dateTime={post.date}
                  className="mb-3 block font-mono text-sm text-slate-400"
                >
                  {formatDate(post.date)}
                </time>
              }
              footer={
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                  {blogData.readMoreLabel}
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              }
            >
              <MarkdownContent content={post.summary} />
            </ContentCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
