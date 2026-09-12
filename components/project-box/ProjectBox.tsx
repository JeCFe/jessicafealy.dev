import { Code, DeployedCode, Design, OpenWeb } from "@/assets";
import { siteData } from "@/data";
import { ArrowRight, ImageOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MarkdownContent, Pill, Typography } from "..";

const customOrder = ["design", "deployed", "web", "git"];

type ProjectLink = {
  href: string;
  type: string;
};

const compareString = (a: ProjectLink, b: ProjectLink) => {
  const indexA = customOrder.indexOf(a.type);
  const indexB = customOrder.indexOf(b.type);
  if (indexA === -1 || indexB === -1) return 0;
  return indexA - indexB;
};

const projectLinkLabels: Record<string, string> =
  siteData.accessibility.projectLinks;

const projectLinkIcons = {
  git: Code,
  web: OpenWeb,
  deployed: DeployedCode,
  design: Design,
};

export type ProjectBoxProps = {
  heading: string;
  link: ProjectLink[];
  image?: string | null;
  imageAlt?: string | null;
  imageLayout?: "side" | "wide";
  body: string;
  pills?: string[];
  order: number;
  showImagePlaceholder?: boolean;
  actionLabel?: string;
  variant?: "personal" | "carousel";
};

export const ProjectBox = ({
  heading,
  link,
  image,
  imageAlt,
  imageLayout = "side",
  body,
  pills,
  showImagePlaceholder = false,
  actionLabel,
  variant = "personal",
}: ProjectBoxProps) => {
  const projectImage = image?.trim();
  const hasImage = Boolean(projectImage);
  const hasMedia = hasImage || showImagePlaceholder;
  const usesWideImage = hasMedia && imageLayout === "wide";

  return (
    <article
      className={`relative overflow-hidden border border-slate-700/70 bg-slate-900/70 shadow-[0_24px_80px_-44px_rgba(34,211,238,0.5)] backdrop-blur ${
        variant === "carousel"
          ? "rounded-2xl transition-all duration-300 group-hover:border-cyan-300/70 group-hover:shadow-[0_30px_90px_-38px_rgba(34,211,238,0.7)] group-active:scale-[0.99]"
          : "rounded-3xl"
      }`}
    >
      <div
        className={`grid ${
          hasMedia && !usesWideImage
            ? "md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
            : "grid-cols-1"
        }`}
      >
        {hasMedia ? (
          <div
            className={`relative overflow-hidden border-b border-slate-700/70 ${
              usesWideImage
                ? `min-h-0 ${variant === "carousel" ? "aspect-[4/3]" : "aspect-[8/5]"}`
                : "min-h-56 md:min-h-full md:border-b-0 md:border-r"
            }`}
          >
            {projectImage ? (
              <>
                <Image
                  src={projectImage}
                  alt={imageAlt ?? ""}
                  fill
                  loading="lazy"
                  sizes={
                    usesWideImage
                      ? "(min-width: 1024px) 760px, 100vw"
                      : "(min-width: 768px) 320px, 100vw"
                  }
                  className={`object-cover object-center ${
                    variant === "carousel"
                      ? "transition-transform duration-500 group-hover:scale-[1.02]"
                      : ""
                  }`}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent"
                />
              </>
            ) : (
              <div className="flex h-full items-center justify-center bg-slate-950 text-slate-600">
                <ImageOff aria-hidden="true" className="h-12 w-12" />
                <span className="sr-only">No project image available</span>
              </div>
            )}
          </div>
        ) : null}

        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <Typography as="h3">{heading}</Typography>
            <div className="flex shrink-0 gap-2">
              {[...link].sort(compareString).map((projectLink, index) => {
                const Icon =
                  projectLinkIcons[
                    projectLink.type as keyof typeof projectLinkIcons
                  ];
                const label =
                  projectLinkLabels[projectLink.type] ??
                  siteData.accessibility.projectLinks.fallback;

                if (!Icon) return null;

                return (
                  <Link
                    key={`${projectLink.type}-${index}`}
                    href={projectLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (${siteData.accessibility.opensInNewTab})`}
                    title={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-cyan-300 transition-colors hover:border-cyan-300 hover:bg-cyan-300 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                  >
                    <Icon aria-hidden="true" className="h-5 w-5 fill-current" />
                  </Link>
                );
              })}
            </div>
          </div>

          <MarkdownContent content={body} />

          {actionLabel ? (
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
              {actionLabel}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          ) : null}

          {pills?.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {pills.map((pill) => (
                <Pill key={pill}>{pill}</Pill>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
};
