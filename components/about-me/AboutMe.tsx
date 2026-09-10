import { MarkdownContent } from "@/components/markdown-content";
import { aboutData } from "@/data";
import { PageId, SectionHeading } from "..";

export const AboutMe = ({ id }: { id: PageId }) => {
  return (
    <section className="scroll-mt-24" id={id}>
      <SectionHeading eyebrow="01">{aboutData.heading}</SectionHeading>
      <MarkdownContent content={aboutData.body} />
    </section>
  );
};
