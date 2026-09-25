import { Github } from "@/assets";
import { siteData } from "@/data";
import { ExternalLink, MarkdownContent, Navigation } from "..";

export const Introduction = () => {
  const { hero } = siteData;

  return (
    <aside className="top-0 flex flex-col pt-20 lg:sticky lg:h-screen lg:py-24">
      <div className="flex flex-col lg:min-h-0 lg:flex-1 lg:overflow-y-auto">
        <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          {hero.eyebrow}
        </p>

        <h1 className="pb-2 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
          {hero.name}
        </h1>

        <h2 className="mt-5 text-xl font-medium tracking-tight text-slate-200 sm:text-2xl">
          {hero.role}
        </h2>

        <MarkdownContent
          content={hero.summary}
          paragraphClassName="max-w-md !leading-7"
        />

        <div className="mt-8 flex flex-wrap gap-3">
          <ExternalLink
            href={hero.tertiaryAction.href}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 no-underline transition-colors hover:bg-cyan-200 hover:text-slate-950"
          >
            <Github
              aria-hidden
              className="size-6 fill-current [&_path]:stroke-current [&_path]:stroke-[0.35]"
            />
            {hero.tertiaryAction.label}
          </ExternalLink>

          <ExternalLink
            href={hero.secondaryAction.href}
            className="inline-flex items-center rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 no-underline transition-colors hover:border-pink-400 hover:text-pink-200"
          >
            {hero.secondaryAction.label}
          </ExternalLink>
        </div>

        <Navigation />
      </div>
    </aside>
  );
};
