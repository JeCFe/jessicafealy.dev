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
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<PageId>("about");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds: PageId[] = ["about", "proficiencies", "experience"]; // Add your section IDs here
      let currentActiveSection = null;

      sectionIds.forEach((id) => {
        console.log(id);
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
    <div className="min-h-screen w-full flex-col bg-slate-900 text-white">
      <Jecfe />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 pb-20 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="md:flex md:justify-between md:gap-4">
          <Introduction currentId={activeSection} />
          <MiddleDivider />
          <div className="flex min-h-screen w-full flex-col md:py-24">
            <AboutMe id="about" />
            <Proficiencies id="proficiencies" />
            <Experience id="experience" />
          </div>
        </div>
      </div>
    </div>
  );
}
