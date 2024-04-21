"use client";

import {
  Experience,
  Introduction,
  Jecfe,
  MiddleDivider,
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
  });

  return (
    <div id="absolute">
      <Jecfe />
      <div className="mx-auto max-w-screen-xl px-6 py-12 pb-20 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="md:flex md:justify-between md:gap-4">
          <Introduction currentId={activeSection} />
          <MiddleDivider />
          <div className="flex flex-col md:py-24">
            <AboutMe id="about" />
            <Proficiencies id="proficiencies" />
            <Experience id="experience" />
            <Project id="projects" />
          </div>
        </div>
      </div>
    </div>
  );
}
