import { Github, LinkedIn } from "@/assets";
import { siteData } from "@/data";
import Link from "next/link";
import Markdown from "react-markdown";
import { Navigation, PageId } from "..";

const socialIcons = {
  github: {
    icon: Github,
    className: "inline-block h-20 w-20 fill-pink-500 hover:animate-pulse",
  },
  linkedin: {
    icon: LinkedIn,
    className: "inline-block h-20 w-20 fill-cyan-500 hover:animate-pulse",
  },
};

export function Introduction({ currentId }: { currentId: PageId }) {
  return (
    <div className="top-0 flex max-h-screen flex-col justify-between pt-12 md:sticky md:h-screen md:w-auto md:py-24">
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold tracking-tight text-slate-200 md:text-7xl">
          {siteData.hero.name}
        </h1>
        <h2 className="mt-3 text-2xl font-medium tracking-tight text-slate-200">
          {siteData.hero.role}
        </h2>
        <Markdown
          components={{
            p: ({ children }) => (
              <h3 className="max-w-s mt-4 max-w-xs text-lg leading-normal text-slate-400">
                {children}
              </h3>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-slate-200">
                {children}
              </strong>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-slate-200"
              >
                {children}
              </a>
            ),
          }}
        >
          {siteData.hero.summary}
        </Markdown>
      </div>
      <Navigation currentId={currentId} />
      <div className="flex flex-col justify-end">
        <div className="flex w-full justify-start space-x-12 pt-2 md:justify-center md:pt-0">
          {siteData.socialLinks.map((link) => {
            const social =
              socialIcons[link.platform as keyof typeof socialIcons];

            if (!social) return null;

            const Icon = social.icon;

            return (
              <Link
                className="flex flex-col"
                aria-label={link.label}
                href={link.href}
                target="_blank"
                key={`${link.platform}-${link.href}`}
              >
                <Icon alt={link.iconAlt} className={social.className} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
