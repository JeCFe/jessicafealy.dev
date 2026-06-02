import { aboutData } from "@/data";
import Markdown from "react-markdown";
import { PageId } from "..";

export function AboutMe({ id }: { id: PageId }) {
  return (
    <div id={id}>
      <h2 className="w-full text-2xl font-bold tracking-tight text-slate-200 underline decoration-1 underline-offset-8 md:text-3xl">
        About me
      </h2>
      {(aboutData as string[]).map((paragraph, i) => (
        <Markdown
          key={i}
          components={{
            p: ({ children }) => (
              <p className="mt-4 text-lg leading-normal text-slate-400">
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-slate-200">
                {children}
              </strong>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-slate-200"
              >
                {children}
              </a>
            ),
          }}
        >
          {paragraph}
        </Markdown>
      ))}
    </div>
  );
}
