import Markdown from "react-markdown";
import { ExternalLink, Pill } from "..";

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

export function ExperienceBox({
  jobLink,
  jobTitle,
  date,
  highlights,
  pills,
}: ExperienceProps) {
  return (
    <article className="relative border-l border-slate-700 pl-7 sm:pl-9">
      <div className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-100 sm:text-2xl">
            {jobTitle}
          </h3>
          <ExternalLink
            href={jobLink.href}
            className="mt-1 inline-block font-semibold text-cyan-200"
          >
            {jobLink.name}
          </ExternalLink>
        </div>
        <p className="shrink-0 font-mono text-xs uppercase tracking-wider text-slate-500 sm:pt-2">
          {date}
        </p>
      </div>

      <ul className="mt-6 space-y-3 text-base leading-7 text-slate-400">
        {highlights.map((highlight) => (
          <li className="relative pl-5" key={highlight}>
            <span aria-hidden="true" className="absolute left-0 top-3 h-1 w-1 rounded-full bg-pink-400" />
            <Markdown
              components={{
                p: ({ children }) => <span>{children}</span>,
                strong: ({ children }) => (
                  <strong className="font-semibold text-slate-100">
                    {children}
                  </strong>
                ),
                a: ({ href, children }) => (
                  <ExternalLink
                    href={href ?? "#"}
                    className="font-semibold text-cyan-200"
                  >
                    {children}
                  </ExternalLink>
                ),
              }}
            >
              {highlight}
            </Markdown>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {pills?.map((x, i) => <Pill key={`${x}-${i}`}>{x}</Pill>)}
      </div>
    </article>
  );
}
