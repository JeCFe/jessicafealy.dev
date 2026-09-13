import { proficiencyData, siteData } from "@/data";
import { proficiencyIcons, proficiencyLogo } from ".";
import { ExternalLink } from "..";

export const Proficiencies = () => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {proficiencyData.items.map((proficiency) => {
        const logo =
          proficiencyIcons[proficiency.icon as keyof typeof proficiencyIcons];

        if (!logo) return null;

        const Icon = logo.icon;

        return (
          <ExternalLink
            href={proficiency.href}
            key={`${proficiency.icon}-${proficiency.href}`}
            variant="unstyled"
            aria-label={siteData.accessibility.proficiencyLinkLabel.replace(
              "{name}",
              proficiency.name,
            )}
            className="group flex min-h-20 items-center gap-3 rounded-2xl border border-slate-700/70 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-400/60 hover:text-white"
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
          </ExternalLink>
        );
      })}
    </div>
  );
};
