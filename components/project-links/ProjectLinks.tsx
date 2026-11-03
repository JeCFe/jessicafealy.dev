import { Code, DeployedCode, Design, OpenWeb } from "@/assets";
import { siteData } from "@/data";
import { ExternalLink } from "..";

const linkOrder = ["design", "deployed", "web", "git"];
const linkIcons = {
  git: Code,
  web: OpenWeb,
  deployed: DeployedCode,
  design: Design,
};

type ProjectLink = { href: string; type: string };

export const ProjectLinks = ({ links }: { links: readonly ProjectLink[] }) => (
  <div className="flex shrink-0 gap-2">
    {[...links]
      .sort((a, b) => {
        const indexA = linkOrder.indexOf(a.type);
        const indexB = linkOrder.indexOf(b.type);
        return indexA === -1 || indexB === -1 ? 0 : indexA - indexB;
      })
      .map((link, index) => {
        const type = link.type as keyof typeof linkIcons;
        const Icon = linkIcons[type];
        if (!Icon) return null;
        const label = siteData.accessibility.projectLinks[type];

        return (
          <ExternalLink
            key={`${link.type}-${index}`}
            href={link.href}
            variant="icon"
            aria-label={label}
            title={label}
          >
            <Icon aria-hidden="true" className="h-5 w-5 fill-current" />
          </ExternalLink>
        );
      })}
  </div>
);
