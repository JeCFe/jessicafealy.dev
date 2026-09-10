import { experienceData } from "@/data";
import { ExperienceBox, ExperienceProps, PageId, SectionHeading } from "..";

export const Experience = ({ id }: { id: PageId }) => {
  const data: ExperienceProps[] = experienceData.items;

  return (
    <section className="mt-24 scroll-mt-24" id={id}>
      <SectionHeading eyebrow="03">{experienceData.heading}</SectionHeading>
      <div className="space-y-12">
        {data.map((x, i) => (
          <ExperienceBox {...x} key={`${x.jobTitle}-${i}`} />
        ))}
      </div>
    </section>
  );
};
