import Link from "next/link";
import { proficiencies } from ".";

export function Proficiencies() {
  return (
    <div className="mt-14 flex flex-col">
      <h2 className="w-full text-2xl font-bold tracking-tight text-slate-200 underline decoration-1 underline-offset-8 md:text-3xl">
        Proficiencies
      </h2>
      <div className="mt-6 flex flex-wrap gap-4">
        {proficiencies.map((x, i) => (
          <Link href={x.href} key={`proficiencies-${i}`} target="_blank">
            {x.children}
          </Link>
        ))}
      </div>
    </div>
  );
}
