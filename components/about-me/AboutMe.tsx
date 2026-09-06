import { aboutData } from "@/data";
import Markdown from "react-markdown";
import { ExternalLink, PageId, SectionHeading } from "..";

export function AboutMe({ id }: { id: PageId }) {
  return (
    <section className="scroll-mt-24" id={id}>
      <SectionHeading eyebrow="01">{aboutData.heading}</SectionHeading>
      <Markdown
        components={{
          p: ({ children }) => (
            <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-slate-200">{children}</strong>
          ),
          a: ({ href, children }) => (
            <ExternalLink href={href ?? "#"} className="font-semibold text-cyan-200">
              {children}
            </ExternalLink>
          ),
        }}
      >
        {aboutData.body}
      </Markdown>
    </section>
  );
}
