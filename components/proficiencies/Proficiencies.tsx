import { proficiencyData, siteData } from "@/data";
import Link from "next/link";
import { proficiencyIcons, proficiencyLogo } from ".";
import { PageId, SectionHeading } from "..";

export function Proficiencies({ id }: { id: PageId }) {
  return (
    <section className="mt-24 scroll-mt-24" id={id}>
      <SectionHeading eyebrow="02">{proficiencyData.heading}</SectionHeading>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {proficiencyData.items.map((proficiency) => {
          const logo =
            proficiencyIcons[proficiency.icon as keyof typeof proficiencyIcons];

          if (!logo) return null;

          const Icon = logo.icon;

          return (
            <Link
              href={proficiency.href}
              key={`${proficiency.icon}-${proficiency.href}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${siteData.accessibility.proficiencyLinkLabel.replace(
                "{name}",
                proficiency.name,
              )} (${siteData.accessibility.opensInNewTab})`}
              className="group flex min-h-20 items-center gap-3 rounded-2xl border border-slate-700/70 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-400/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              <Icon
                aria-hidden="true"
                width={36}
                height={36}
                className={proficiencyLogo({
                  white: "white" in logo && logo.white,
                })}
                style={{ height: 36, width: 36 }}
              />
              <span>{proficiency.name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
