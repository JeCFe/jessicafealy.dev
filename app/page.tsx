"use client";

import Link from "next/link";
import { Github, LinkedIn } from "@/assets/logos";
import { Jecfe, Proficiencies } from "@/components";
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
    <GlowCapture size={700}>
      <Jecfe />
      <Glow>
        <div className="min-h-screen w-full flex-col bg-slate-900 text-white glow:bg-slate-800/50">
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="md:flex md:justify-between md:gap-4">
              <div className="top-0 flex max-h-screen flex-col justify-between pt-12 md:sticky md:h-screen md:w-auto md:py-24">
                <div className="flex flex-col">
                  <h1 className="text-5xl font-bold tracking-tight text-slate-200 md:text-7xl">
                    Jessica Fealy
                  </h1>
                  <h2 className="mt-3 text-xl font-medium tracking-tight text-slate-200 md:text-3xl">
                    Fullstack Software Engineer
                  </h2>
                  <h3 className="max-w-s mt-4 text-lg leading-normal text-slate-400 md:max-w-xs">
                    Enjoy toying around with micro-processors, and web
                    applications.
                  </h3>
                </div>
                {/* <div>
                  <a href="#about">About me</a>
                  <div>Proficiencies</div>
                  <div>Experience</div>
                  <div>Projects</div>
                </div> */}

                <div className="w-full justify-start space-x-12 pt-10">
                  <Link
                    aria-label="Github link"
                    href="https://github.com/JeCFe"
                    target="_blank"
                  >
                    <Github
                      alt="Github logo"
                      className="inline-block h-20 w-20 fill-white glow:fill-pink-500"
                    />
                  </Link>
                  <Link
                    aria-label="LinkedIn link"
                    href="https://uk.linkedin.com/in/jessicaclarafealy"
                    target="_blank"
                  >
                    <LinkedIn
                      alt="LinkedIn logo"
                      className="inline-block h-20 w-20 fill-white glow:fill-cyan-500"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex max-h-screen max-w-full md:visible md:sticky md:top-0 md:w-1/12">
                <div className="mx-auto my-12 flex flex-grow border glow:border-pink-500 md:flex-grow-0" />
              </div>
              <div className="flex min-h-screen w-full flex-col md:py-24">
                <AboutMe />
                <Proficiencies />
              </div>
            </div>
          </div>
        </div>
      </Glow>
    </GlowCapture>
  );
}
