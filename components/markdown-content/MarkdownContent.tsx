import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ExternalLink, Typography } from "..";

type MarkdownContentVariant = "body" | "inline" | "introduction";

type MarkdownContentProps = {
  content: string;
  variant?: MarkdownContentVariant;
};

export const MarkdownContent = ({
  content,
  variant = "body",
}: MarkdownContentProps) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <Typography as="h1" className="mt-10">
            {children}
          </Typography>
        ),
        h2: ({ children }) => (
          <Typography as="h2" className="mt-10">
            {children}
          </Typography>
        ),
        h3: ({ children }) => (
          <Typography as="h3" className="mt-8">
            {children}
          </Typography>
        ),
        h4: ({ children }) => (
          <Typography as="h4" className="mt-6">
            {children}
          </Typography>
        ),
        h5: ({ children }) => (
          <Typography as="h5" className="mt-6">
            {children}
          </Typography>
        ),
        h6: ({ children }) => (
          <Typography as="h6" className="mt-6">
            {children}
          </Typography>
        ),
        p: ({ children }) =>
          variant === "inline" ? (
            <Typography as="span">{children}</Typography>
          ) : variant === "introduction" ? (
            <Typography className="mt-5 max-w-md !leading-7">
              {children}
            </Typography>
          ) : (
            <Typography className="mt-5">{children}</Typography>
          ),
        strong: ({ children }) => (
          <Typography as="strong">{children}</Typography>
        ),
        em: ({ children }) => <Typography as="em">{children}</Typography>,
        del: ({ children }) => <Typography as="del">{children}</Typography>,
        a: ({ href, children }) => (
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
        ol: ({ children }) => (
          <Typography as="ol" className="mt-5 list-decimal space-y-2 pl-5">
            {children}
          </Typography>
        ),
        li: ({ children, className }) => (
          <li className={`pl-1 ${className ?? ""}`}>{children}</li>
        ),
        blockquote: ({ children }) => (
          <Typography as="blockquote" className="mt-6">
            {children}
          </Typography>
        ),
        hr: () => <hr className="my-8 border-slate-700" />,
        pre: ({ children }) => (
          <Typography
            as="pre"
            className="mt-6 overflow-x-auto rounded-xl border border-slate-700 bg-slate-950 p-4"
          >
            {children}
          </Typography>
        ),
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
        th: ({ children }) => (
          <Typography
            as="th"
            className="border border-slate-700 bg-slate-800 px-3 py-2"
          >
            {children}
          </Typography>
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
