"use client";

import { navData, siteData } from "@/data";
import { cva } from "class-variance-authority";
import { ArrowUp } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { PageId } from "..";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

const sectionIds: PageId[] = [
  "about",
  "proficiencies",
  "experience",
  "professional-projects",
  "projects",
];

const pageIds: PageId[] = ["absolute", ...sectionIds];

const getPageIdFromHash = (hash: string) => {
  const id = hash.slice(1);
  return pageIds.find((pageId) => pageId === id);
};

const navLink = cva(
  "h-px w-6 bg-slate-600 transition-all duration-300 group-hover:w-10 group-hover:bg-cyan-300",
  {
    variants: {
      active: {
        true: "w-10 bg-cyan-300",
      },
    },
  },
);

const uppies = cva(
  "fixed bottom-6 right-6 z-20 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-pink-400/70 bg-slate-950/90 shadow-lg transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-300",
  {
    variants: {
      show: {
        true: "opacity-100",
        false: "pointer-events-none invisible opacity-0",
      },
    },
  },
);

type NavItem = {
  text: string;
  id: PageId;
};

const NavItems = ({
  items,
  currentId,
  handleClick,
  mobile = false,
}: {
  items: NavItem[];
  currentId: PageId;
  handleClick: (id: PageId) => void;
  mobile?: boolean;
}) => {
  return (
    <>
      {items.map((x, index) => {
        const isActive = currentId === x.id;

        return (
          <a
            key={`${x.id}`}
            href={`#${x.id}`}
            aria-current={isActive ? "location" : undefined}
            className={`group flex items-center font-mono uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${
              mobile
                ? `min-h-14 w-full gap-4 rounded-md px-2 py-3 text-sm tracking-[0.12em] ${
                    isActive
                      ? "text-pink-300"
                      : "text-slate-400 hover:text-white"
                  }`
                : `gap-3 rounded-sm py-1 text-xs tracking-[0.16em] ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleClick(x.id);
            }}
          >
            <span
              className={
                mobile && isActive
                  ? "h-px w-10 bg-pink-400"
                  : navLink({ active: isActive })
              }
            />
            <span
              className={`text-[0.65rem] ${
                isActive
                  ? mobile
                    ? "text-pink-300"
                    : "text-cyan-300"
                  : "text-slate-400"
              }`}
            >
              0{index + 1}
            </span>
            <span>{x.text}</span>
          </a>
        );
      })}
    </>
  );
};

export const Navigation = ({
  hasProfessionalProjects,
}: {
  hasProfessionalProjects: boolean;
}) => {
  const [currentId, setCurrentId] = useState<PageId>("absolute");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navItems = (navData as NavItem[]).filter(
    ({ id }) => id !== "professional-projects" || hasProfessionalProjects,
  );

  const scrollToSection = useCallback(
    (id: PageId, behavior: ScrollBehavior) => {
      const element = document.getElementById(id);
      if (!element) return;

      element.scrollIntoView({ behavior });
      setCurrentId(id);
    },
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      let currentActiveSection: PageId | null = null;

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 0) {
          currentActiveSection = id;
        }
      });

      if (currentActiveSection !== null) {
        setCurrentId(currentActiveSection);
      } else if (window.scrollY < 150) {
        setCurrentId("absolute");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollToHash = () => {
      const id = getPageIdFromHash(window.location.hash);
      if (id) scrollToSection(id, "auto");
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    window.addEventListener("popstate", scrollToHash);
    return () => {
      window.removeEventListener("hashchange", scrollToHash);
      window.removeEventListener("popstate", scrollToHash);
    };
  }, [scrollToSection]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setIsOpen(false);
    };

    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => {
      desktopQuery.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  const handleClick = useCallback(
    (id: PageId) => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      scrollToSection(id, reduceMotion ? "auto" : "smooth");

      if (window.location.hash !== `#${id}`) {
        window.history.pushState(null, "", `#${id}`);
      }

      setIsOpen(false);
    },
    [scrollToSection],
  );

  return (
    <div className="my-4 md:mt-16">
      <button
        aria-label={siteData.accessibility.backToTop}
        className={uppies({
          show: currentId !== "about" && currentId !== "absolute",
        })}
        onClick={() => handleClick("absolute")}
      >
        <ArrowUp aria-hidden="true" className="text-cyan-500" />
      </button>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button
            aria-label={
              isOpen
                ? siteData.accessibility.closeNavigation
                : siteData.accessibility.toggleNavigation
            }
            className="group fixed left-5 top-5 z-30 flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl border border-slate-800 bg-slate-950/90 backdrop-blur focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 md:hidden"
          >
            <span aria-hidden="true" className="relative block h-5 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 bg-slate-200 transition-transform ${
                  isOpen ? "translate-y-[9px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] h-0.5 w-6 bg-slate-200 transition-opacity ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-6 bg-slate-200 transition-transform ${
                  isOpen ? "-translate-y-[9px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </SheetTrigger>
        <SheetContent className="px-5 pb-8 pt-28 md:hidden">
          <SheetTitle className="sr-only">
            {siteData.accessibility.mobileNavigation}
          </SheetTitle>
          <nav aria-label={siteData.accessibility.mobileNavigation}>
            <div className="flex w-full max-w-md flex-col gap-3">
              <NavItems
                items={navItems}
                currentId={currentId}
                handleClick={handleClick}
                mobile
              />
            </div>
          </nav>
        </SheetContent>
      </Sheet>
      <nav
        aria-label={siteData.accessibility.primaryNavigation}
        className="hidden items-start justify-center space-y-2 md:flex md:flex-col"
      >
        <NavItems
          items={navItems}
          currentId={currentId}
          handleClick={handleClick}
        />
      </nav>
    </div>
  );
};
