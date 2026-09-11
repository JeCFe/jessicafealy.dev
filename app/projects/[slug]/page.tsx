import { ExternalLink, ProjectContent } from "@/components";
import { getProjectBySlug, getProjectWriteUps } from "@/content";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
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
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-24">
      <Link
        href="/#professional-projects"
        className="inline-flex items-center gap-2 rounded-sm font-mono text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300 transition-colors hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        Professional projects
      </Link>

      <article className="mt-12">
        <header>
          <h1 className="bg-gradient-to-br from-white via-slate-100 to-slate-500 bg-clip-text pb-2 text-4xl font-semibold tracking-[-0.045em] text-transparent sm:text-6xl">
            {project.title}
          </h1>
          {project.pageSummary ? (
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
              {project.pageSummary}
            </p>
          ) : null}
          {project.linkHref ? (
            <ExternalLink
              href={project.linkHref}
              className="mt-7 inline-block rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-cyan-200 !no-underline hover:border-cyan-300"
            >
              {project.linkLabel ?? "Visit project"}
            </ExternalLink>
          ) : null}
        </header>

        {project.image ? (
          <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={project.image}
              alt={project.imageAlt ?? ""}
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
            />
          </div>
        ) : null}

        <ProjectContent blocks={project.content ?? []} />
      </article>
    </main>
  );
};

export default ProjectPage;
