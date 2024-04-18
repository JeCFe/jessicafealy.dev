import Link from "next/link";
import { proficiencies } from ".";

export function Proficiencies() {
  return (
    <div className="mt-14 flex flex-col">
      <h2 className="w-full text-xl font-bold tracking-tight text-slate-200 underline decoration-1 underline-offset-8 md:text-3xl">
        Proficiencies
      </h2>
      <div className="mt-6 grid w-fit grid-cols-5 gap-4 lg:grid-cols-7">
        {proficiencies.map((x, i) => (
          <Link href={x.href} key={`proficiencies-${i}`}>
            {x.children}
          </Link>
        ))}
      </div>
    </div>
  );
}
