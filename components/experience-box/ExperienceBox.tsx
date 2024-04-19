import { Anchor } from "@jecfe/react-design-system";
import { Pill } from "..";

export type ExperienceProps = {
  jobTitle: string;
  jobLink: {
    name: string;
    href: string;
  };
  date: string;
  description: string;
  pills?: string[];
};

export function ExperienceBox({
  jobLink,
  jobTitle,
  date,
  description,
  pills,
}: ExperienceProps) {
  return (
    <div className="z-10 rounded-xl transition-colors duration-300 ease-in-out md:p-8 md:hover:bg-slate-800/70 md:hover:shadow-xl">
      <div className="flex flex-row">
        <h2 className="text-2xl font-medium tracking-tight text-slate-200">
          {jobTitle}
        </h2>
        <div className="flex flex-grow" />
        <Anchor href={jobLink.href} target="_blank">
          <h2 className="text-2xl font-medium tracking-tight">
            {jobLink.name}
          </h2>
        </Anchor>
      </div>

      <h3 className="text-sm leading-normal text-slate-400">{date}</h3>

      <p className="my-4 leading-normal text-slate-400">{description}</p>
      <div className="pointer-events-none flex flex-wrap gap-2">
        {pills?.map((x, i) => <Pill key={`${x}-${i}`}>{x}</Pill>)}
      </div>
    </div>
  );
}
