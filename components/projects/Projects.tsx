import { projectData } from "@/data";
import { PageId, ProjectBox, ProjectBoxProps, SectionHeading } from "..";

export const Project = ({
  id,
  eyebrow = "04",
}: {
  id: PageId;
  eyebrow?: string;
}) => {
  const data: ProjectBoxProps[] = projectData.items as ProjectBoxProps[];

  return (
    <section className="mt-24 scroll-mt-24 pb-24" id={id}>
      <SectionHeading eyebrow={eyebrow}>{projectData.heading}</SectionHeading>
      <div className="space-y-8">
        {[...data]
          .sort((a, b) => b.order - a.order)
          .map((x, i) => (
            <ProjectBox {...x} key={`${x.heading}-${i}`} />
          ))}
      </div>
    </section>
  );
};
