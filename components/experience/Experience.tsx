import { experienceData } from "@/data";
import { ExperienceBox, ExperienceProps } from "..";

export function Experience() {
  const data: ExperienceProps[] = experienceData;

  return (
    <div className="mt-14 flex flex-col">
      <h2 className="w-full pb-4 text-2xl font-bold tracking-tight text-slate-200 underline decoration-1 underline-offset-8 md:text-3xl">
        Experience
      </h2>
      <div className="space-y-8 md:space-y-2">
        {data.map((x, i) => (
          <ExperienceBox {...x} key={`${x.jobTitle}-${i}`} />
        ))}
      </div>
    </div>
  );
}
