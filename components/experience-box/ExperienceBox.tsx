import { ExternalLink, MarkdownContent, Pill, Typography } from "..";

export type ExperienceProps = {
  jobTitle: string;
  jobLink: {
    name: string;
    href: string;
  };
  date: string;
  highlights: string[];
  pills?: string[];
};

export const ExperienceBox = ({
  jobLink,
  jobTitle,
  date,
  highlights,
  pills,
}: ExperienceProps) => {
  return (
    <article className="relative border-l border-slate-700 pl-7 sm:pl-9">
      <div className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Typography as="h3">{jobTitle}</Typography>
          <ExternalLink
            href={jobLink.href}
            className="mt-1 inline-block font-semibold text-cyan-200"
          >
            {jobLink.name}
          </ExternalLink>
        </div>
        <Typography
          as="small"
          className="shrink-0 uppercase tracking-wider sm:pt-2"
        >
          {date}
        </Typography>
      </div>

      <Typography as="ul" className="mt-6 space-y-3">
        {highlights.map((highlight) => (
          <li className="relative pl-5" key={highlight}>
            <span
              aria-hidden="true"
              className="absolute left-0 top-3 h-1 w-1 rounded-full bg-pink-400"
            />
            <MarkdownContent content={highlight} variant="inline" />
          </li>
        ))}
      </Typography>
      <div className="mt-6 flex flex-wrap gap-2">
        {pills?.map((x, i) => <Pill key={`${x}-${i}`}>{x}</Pill>)}
      </div>
    </article>
  );
};
