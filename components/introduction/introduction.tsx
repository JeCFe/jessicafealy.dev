import { Github } from "@/assets";
import { siteData } from "@/data";
import Markdown from "react-markdown";
import { ExternalLink, Navigation, PageId } from "..";

export function Introduction({ currentId }: { currentId: PageId }) {
  return (
    <header className="top-0 flex flex-col pt-20 lg:sticky lg:h-screen lg:py-24">
      <div className="flex flex-col">
        <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          {siteData.hero.eyebrow}
        </p>
        <h1 className="bg-gradient-to-br from-white via-slate-100 to-slate-500 bg-clip-text pb-2 text-5xl font-semibold tracking-[-0.055em] text-transparent sm:text-6xl lg:text-7xl">
          {siteData.hero.name}
        </h1>
        <h2 className="mt-5 text-xl font-medium tracking-tight text-slate-200 sm:text-2xl">
          {siteData.hero.role}
        </h2>
        <Markdown
          components={{
            p: ({ children }) => (
              <p className="mt-5 max-w-md text-base leading-7 text-slate-400 sm:text-lg">
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-slate-100">
                {children}
              </strong>
            ),
          }}
        >
          {siteData.hero.summary}
        </Markdown>
        <div className="mt-8 flex flex-wrap gap-3">
          <ExternalLink
            href={siteData.hero.tertiaryAction.href}
            className="flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 !no-underline transition-colors hover:bg-cyan-200 hover:text-slate-950"
          >
            <Github
              aria-hidden="true"
              width={24}
              height={24}
              className="h-6 w-6 fill-current [&_path]:stroke-current [&_path]:stroke-[0.35]"
              style={{ height: 24, width: 24 }}
            />
            {siteData.hero.tertiaryAction.label}
          </ExternalLink>
          <ExternalLink
            href={siteData.hero.secondaryAction.href}
            className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 !no-underline hover:border-pink-400 hover:text-pink-200"
          >
            {siteData.hero.secondaryAction.label}
          </ExternalLink>
        </div>
      </div>
      <Navigation currentId={currentId} />
    </header>
  );
}
