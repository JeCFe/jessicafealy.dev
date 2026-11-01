import { cn } from "@/lib";
import { Children, isValidElement, type ReactNode } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ExternalLink, Typography, type TypographyTag } from "..";

const getHeadingText = (children: ReactNode): string =>
  Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child);
      }

      if (isValidElement<{ children?: ReactNode }>(child)) {
        return getHeadingText(child.props.children);
      }

      return "";
    })
    .join("");

const getHeadingId = (children: ReactNode): string =>
  getHeadingIdFromText(getHeadingText(children));

export const getHeadingIdFromText = (text: string): string =>
  text
    .toLowerCase()
    .trim()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export type MarkdownHeading = {
  title: string;
  id: string;
  depth: number;
};

const cleanHeadingText = (text: string) =>
  text
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\[[^\]]*\]/g, "$1")
    .replace(/<[^>]*>/g, "")
    .replace(/\\([\\`*_{}[\]()#+.!>~-])/g, "$1")
    .replace(/[\\*_~`]/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .trim();

export const getMarkdownHeadings = (content: string): MarkdownHeading[] => {
  const lines = content.split(/\r?\n/);
  const headings: MarkdownHeading[] = [];
  let fence: { character: string; length: number } | undefined;

  lines.forEach((line, index) => {
    const fenceMatch = line.match(/^ {0,3}(`{3,}|~{3,})/);
    if (fenceMatch) {
      const marker = fenceMatch[1];
      if (!fence) {
        fence = { character: marker[0], length: marker.length };
      } else if (
        marker[0] === fence.character &&
        marker.length >= fence.length
      ) {
        fence = undefined;
      }
      return;
    }
    if (fence) return;

    const lineWithoutQuote = line.replace(/^ {0,3}(?:>\s?)+/, "");
    const atxHeading = lineWithoutQuote.match(
      /^ {0,3}(#{1,6})(?:\s+|$)(.*?)\s*#*\s*$/,
    );
    if (atxHeading) {
      const title = cleanHeadingText(atxHeading[2]);
      if (title) {
        headings.push({
          title,
          id: getHeadingIdFromText(title),
          depth: atxHeading[1].length,
        });
      }
      return;
    }

    const setextHeading = lines[index + 1]?.match(/^ {0,3}(=+|-+)\s*$/);
    if (lineWithoutQuote.trim() && setextHeading) {
      const title = cleanHeadingText(lineWithoutQuote.trim());
      if (title) {
        headings.push({
          title,
          id: getHeadingIdFromText(title),
          depth: setextHeading[1][0] === "=" ? 1 : 2,
        });
      }
    }
  });

  return headings;
};

const renderTypography = (as: TypographyTag, className?: string) => {
  const MarkdownTypography = ({ children }: { children?: ReactNode }) => (
    <Typography
      as={as}
      id={as.startsWith("h") ? getHeadingId(children) : undefined}
      className={className}
    >
      {children}
    </Typography>
  );
  return MarkdownTypography;
};

const typographyComponents = {
  h1: renderTypography("h1", "mt-10"),
  h2: renderTypography("h2", "mt-10"),
  h3: renderTypography("h3", "mt-8"),
  h4: renderTypography("h4", "mt-6"),
  h5: renderTypography("h5", "mt-6"),
  h6: renderTypography("h6", "mt-6"),
  strong: renderTypography("strong"),
  em: renderTypography("em"),
  del: renderTypography("del"),
  ol: renderTypography("ol", "mt-5 list-decimal space-y-2 pl-5"),
  blockquote: renderTypography("blockquote", "mt-6"),
  pre: renderTypography(
    "pre",
    "mt-6 overflow-x-auto rounded-xl border border-slate-700 bg-slate-950 p-4",
  ),
  th: renderTypography("th", "border border-slate-700 bg-slate-800 px-3 py-2"),
};

type MarkdownContentVariant = "body" | "inline";

type MarkdownContentProps = {
  content: string;
  variant?: MarkdownContentVariant;
  paragraphClassName?: string;
};

export const MarkdownContent = ({
  content,
  variant = "body",
  paragraphClassName,
}: MarkdownContentProps) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        ...typographyComponents,
        p: ({ children }) => (
          <Typography
            as={variant === "inline" ? "span" : "p"}
            className={cn(variant !== "inline" && "mt-5", paragraphClassName)}
          >
            {children}
          </Typography>
        ),
        a: ({ href, children }) =>
          href?.startsWith("#") ? (
            <a
              href={href}
              className="rounded-sm font-semibold text-cyan-200 underline decoration-cyan-400/60 decoration-2 underline-offset-4 transition-colors hover:decoration-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              {children}
            </a>
          ) : (
            <ExternalLink
              href={href ?? "#"}
              className="font-semibold text-cyan-200"
            >
              {children}
            </ExternalLink>
          ),
        ul: ({ children, className }) => (
          <Typography
            as="ul"
            className={`mt-5 space-y-2 ${
              className?.includes("contains-task-list")
                ? "list-none pl-0"
                : "list-disc pl-5"
            }`}
          >
            {children}
          </Typography>
        ),
        li: ({ children, className }) => (
          <li className={`pl-1 ${className ?? ""}`}>{children}</li>
        ),
        hr: () => <hr className="my-8 border-slate-700" />,
        code: ({ children, className }) => (
          <Typography
            as="code"
            className={`rounded bg-slate-800 px-1.5 py-0.5 ${className ?? ""}`}
          >
            {children}
          </Typography>
        ),
        table: ({ children }) => (
          <div className="my-6 overflow-x-auto">
            <Typography as="table" className="w-full border-collapse text-left">
              {children}
            </Typography>
          </div>
        ),
        td: ({ children }) => (
          <td className="border border-slate-700 px-3 py-2 align-top">
            {children}
          </td>
        ),
        img: () => null,
      }}
    >
      {content}
    </Markdown>
  );
};
