import { siteData } from "@/data";
import { Anchor, Info } from "@jecfe/react-design-system";
import Markdown from "react-markdown";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-slate-200">
      <Info className="size-32 fill-red-600" />
      <h1 className="flex text-center text-7xl font-bold leading-tight md:text-8xl">
        {siteData.notFound.title}
      </h1>

      <Markdown
        components={{
          p: ({ children }) => (
            <p className="mt-4 flex text-center text-xl text-slate-400">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-slate-200">{children}</strong>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="font-bold hover:text-slate-200"
              rel="noopener noreferrer"
              target="_blank"
            >
              {children}
            </a>
          ),
        }}
      >
        {siteData.notFound.description}
      </Markdown>
      <Anchor href="/" className="pt-8 text-2xl">
        {siteData.notFound.linkLabel}
      </Anchor>
    </div>
  );
}
