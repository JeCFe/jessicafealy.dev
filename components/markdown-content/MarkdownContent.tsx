import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ExternalLink } from "..";

type MarkdownContentVariant = "body" | "introduction" | "project" | "inline";

type MarkdownContentProps = {
  content: string;
  variant?: MarkdownContentVariant;
};

const styles: Record<
  MarkdownContentVariant,
  { paragraph?: string; strong: string }
> = {
  body: {
    paragraph: "mt-5 text-base leading-8 text-slate-400 sm:text-lg",
    strong: "font-semibold text-slate-200",
  },
  introduction: {
    paragraph: "mt-5 max-w-md text-base leading-7 text-slate-400 sm:text-lg",
    strong: "font-semibold text-slate-100",
  },
  project: {
    paragraph: "mt-4 text-sm leading-7 text-slate-400 sm:text-base",
    strong: "font-semibold text-slate-100",
  },
  inline: {
    strong: "font-semibold text-slate-100",
  },
};

export const MarkdownContent = ({
  content,
  variant = "body",
}: MarkdownContentProps) => {
  const style = styles[variant];

  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="mt-10 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="mt-10 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-100 sm:text-2xl">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="mt-6 text-lg font-semibold text-slate-100">
            {children}
          </h4>
        ),
        h5: ({ children }) => (
          <h5 className="mt-6 font-semibold text-slate-100">{children}</h5>
        ),
        h6: ({ children }) => (
          <h6 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-300">
            {children}
          </h6>
        ),
        p: ({ children }) =>
          variant === "inline" ? (
            <span>{children}</span>
          ) : (
            <p className={style.paragraph}>{children}</p>
          ),
        strong: ({ children }) => (
          <strong className={style.strong}>{children}</strong>
        ),
        em: ({ children }) => (
          <em className="italic text-slate-300">{children}</em>
        ),
        del: ({ children }) => (
          <del className="text-slate-500 decoration-slate-500">{children}</del>
        ),
        a: ({ href, children }) => (
          <ExternalLink
            href={href ?? "#"}
            className="font-semibold text-cyan-200"
          >
            {children}
          </ExternalLink>
        ),
        ul: ({ children, className }) => (
          <ul
            className={`mt-5 space-y-2 text-slate-400 ${
              className?.includes("contains-task-list")
                ? "list-none pl-0"
                : "list-disc pl-5"
            }`}
          >
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="mt-5 list-decimal space-y-2 pl-5 text-slate-400">
            {children}
          </ol>
        ),
        li: ({ children, className }) => (
          <li className={`pl-1 ${className ?? ""}`}>{children}</li>
        ),
        blockquote: ({ children }) => (
          <blockquote className="mt-6 border-l-2 border-cyan-300/70 pl-5 italic text-slate-300">
            {children}
          </blockquote>
        ),
        hr: () => <hr className="my-8 border-slate-700" />,
        pre: ({ children }) => (
          <pre className="mt-6 overflow-x-auto rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm leading-6 text-slate-200">
            {children}
          </pre>
        ),
        code: ({ children, className }) => (
          <code
            className={`rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[0.9em] text-cyan-100 ${className ?? ""}`}
          >
            {children}
          </code>
        ),
        table: ({ children }) => (
          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm text-slate-300">
              {children}
            </table>
          </div>
        ),
        th: ({ children }) => (
          <th className="border border-slate-700 bg-slate-800 px-3 py-2 font-semibold text-slate-100">
            {children}
          </th>
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
