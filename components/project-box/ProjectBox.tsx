"use client";

import { Code, DeployedCode, Design, OpenWeb } from "@/assets";
import { siteData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";
import { ExternalLink, Pill } from "..";

const customOrder = ["design", "deployed", "web", "git"];

type ProjectLink = {
  href: string;
  type: string;
};

function compareString(a: ProjectLink, b: ProjectLink) {
  const indexA = customOrder.indexOf(a.type);
  const indexB = customOrder.indexOf(b.type);
  if (indexA === -1 || indexB === -1) return 0;
  return indexA - indexB;
}

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
};

export function ProjectBox({
  heading,
  link,
  image,
  imageAlt,
  imageLayout = "side",
  body,
  pills,
}: ProjectBoxProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const hasImage = typeof image === "string" && image.trim().length > 0;
  const usesWideImage = hasImage && imageLayout === "wide";

  return (
    <article className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/70 shadow-[0_24px_80px_-44px_rgba(34,211,238,0.5)] backdrop-blur">
      <div
        className={`grid ${
          hasImage && !usesWideImage
            ? "md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
            : "grid-cols-1"
        }`}
      >
        {hasImage ? (
          <div
            className={`relative overflow-hidden border-b border-slate-700/70 ${
              usesWideImage
                ? "aspect-[8/5] min-h-0"
                : "min-h-56 md:min-h-full md:border-b-0 md:border-r"
            }`}
          >
            {isImageLoading ? (
              <div
                className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/70"
                role="status"
                aria-label={siteData.accessibility.projectImageLoadingLabel.replace(
                  "{name}",
                  heading,
                )}
              >
                <span
                  aria-hidden="true"
                  className="h-8 w-8 animate-spin rounded-full border-2 border-slate-700 border-t-pink-400 motion-reduce:animate-none"
                />
              </div>
            ) : null}
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              loading="lazy"
              sizes={
                usesWideImage
                  ? "(min-width: 1024px) 760px, 100vw"
                  : "(min-width: 768px) 320px, 100vw"
              }
              className={`object-cover object-center transition-opacity duration-300 ${
                isImageLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setIsImageLoading(false)}
              onError={() => setIsImageLoading(false)}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent"
            />
          </div>
        ) : null}

        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-100">
              {heading}
            </h3>
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

          <Markdown
            components={{
              p: ({ children }) => (
                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                  {children}
                </p>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-slate-100">
                  {children}
                </strong>
              ),
              a: ({ href, children }) => (
                <ExternalLink
                  href={href ?? "#"}
                  className="font-semibold text-cyan-200"
                >
                  {children}
                </ExternalLink>
              ),
            }}
          >
            {body}
          </Markdown>

          <div className="mt-6 flex flex-wrap gap-2">
            {pills?.map((pill) => <Pill key={pill}>{pill}</Pill>)}
          </div>
        </div>
      </div>
    </article>
  );
}
