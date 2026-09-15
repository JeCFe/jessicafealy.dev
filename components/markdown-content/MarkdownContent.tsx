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
  getHeadingText(children)
    .toLowerCase()
    .trim()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

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
