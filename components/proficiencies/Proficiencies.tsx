import { proficiencyData } from "@/data";
import Link from "next/link";
import { proficiencyIcons, proficiencyLogo } from ".";
import { PageId } from "..";

export function Proficiencies({ id }: { id: PageId }) {
  return (
    <div className="mt-14 flex flex-col" id={id}>
      <h2 className="w-full text-2xl font-bold tracking-tight text-slate-200 underline decoration-1 underline-offset-8 md:text-3xl">
        {proficiencyData.heading}
      </h2>
      <div className="mt-6 flex flex-wrap gap-4">
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
            >
              <Icon
                alt={proficiency.iconAlt}
                className={proficiencyLogo({
                  white: "white" in logo && logo.white,
                })}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
