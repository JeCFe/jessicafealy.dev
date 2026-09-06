"use client";

import { JcfeLogo } from "@/assets";
import {
  Experience,
  Introduction,
  Jecfe,
  PageId,
  Proficiencies,
} from "@/components";
import { AboutMe } from "@/components/about-me";
import { Project } from "@/components/projects";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<PageId>("absolute");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds: PageId[] = [
        "about",
        "proficiencies",
        "experience",
        "projects",
      ];
      let currentActiveSection = null;

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 0) {
            currentActiveSection = id;
          }
        }
      });

      if (currentActiveSection === null) {
        return;
      }
      setActiveSection(currentActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="absolute" className="relative overflow-clip">
      <Jecfe />
      <main className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-20 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)] lg:gap-24">
          <Introduction currentId={activeSection} />
          <div className="flex min-w-0 flex-col pt-20 lg:py-24">
            <AboutMe id="about" />
            <Proficiencies id="proficiencies" />
            <Experience id="experience" />
            <Project id="projects" />
          </div>
        </div>

        <div className="pointer-events-none flex w-full items-center justify-center pb-12 lg:hidden">
          <JcfeLogo
            aria-hidden="true"
            width={48}
            height={48}
            className="h-12 w-12"
            style={{ height: 48, width: 48 }}
          />
        </div>
      </main>
    </div>
  );
}
