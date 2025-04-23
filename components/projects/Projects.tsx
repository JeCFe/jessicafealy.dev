import { projectData } from "@/data";
import { PageId, ProjectBox, ProjectBoxProps } from "..";

export function Project({ id }: { id: PageId }) {
  const data: ProjectBoxProps[] = projectData as ProjectBoxProps[];
  return (
    <div className="mt-14 flex flex-col" id={id}>
      <h2 className="w-full pb-4 text-2xl font-bold tracking-tight text-slate-200 underline decoration-1 underline-offset-8 md:text-3xl">
        Projects
      </h2>
      <div className="space-y-8 md:space-y-2">
        {data
          .sort((a, b) => b.order - a.order)
          .map((x, i) => (
            <ProjectBox {...x} key={`${x.heading}-${i}`} />
          ))}
      </div>
    </div>
  );
}
