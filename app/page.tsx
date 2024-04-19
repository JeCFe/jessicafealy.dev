"use client";

import {
  Experience,
  Introduction,
  Jecfe,
  MiddleDivider,
  Proficiencies,
} from "@/components";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import { AboutMe } from "@/components/about-me";

type PageLink = { name?: string; id: string };

const links: PageLink[] = [
  { id: "about" },
  { id: "proficiencies" },
  { id: "experience" },
  { id: "projects" },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full flex-col bg-slate-900 text-white">
      <Jecfe />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 pb-20 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="md:flex md:justify-between md:gap-4">
          <Introduction />
          <MiddleDivider />
          <div className="flex min-h-screen w-full flex-col md:py-24">
            <AboutMe />
            <Proficiencies />
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}
