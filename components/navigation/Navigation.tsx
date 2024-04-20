import { Menu } from "@/assets";
import { navData } from "@/data";
import { ArrowUp } from "@jecfe/react-design-system";
import { cva } from "class-variance-authority";
import { useState } from "react";

export type PageId = "about" | "proficiencies" | "experience" | "absolute";

const navLink = cva(
  "left-0 my-auto flex w-0 bg-slate-200 transition-all duration-300 group-hover:mr-2 group-hover:h-px group-hover:w-20",
  {
    variants: {
      active: {
        true: "w-20 h-px mr-2",
      },
    },
  },
);

const mobileNav = cva("md:hidden", {
  variants: {
    isOpen: {
      true: "fixed left-0 top-0 h-1/4 w-screen bg-slate-800/80",
      false: "hidden",
    },
  },
});

const uppies = cva(
  "fixed bottom-5 right-5 z-10 cursor-pointer rounded-xl border-2 border-pink-400 transition-all duration-300 hover:animate-pulse",
  {
    variants: {
      show: {
        true: "opacity-100",
        false: "opacity-0",
      },
    },
  },
);

type NavItem = {
  text: string;
  id: PageId;
};

const navItems: NavItem[] = navData as NavItem[]; // Need actual type guarding / checking

function NavItems({
  currentId,
  handleClick,
}: {
  currentId: PageId;
  handleClick: (id: PageId) => void;
}) {
  return (
    <>
      {navItems.map((x) => (
        <button
          key={`${x.id}`}
          className="group flex leading-normal text-slate-200 "
          onClick={() => handleClick(x.id)}
        >
          <div className={navLink({ active: currentId == x.id })} />
          <div className="flex w-full">{x.text}</div>
        </button>
      ))}
    </>
  );
}

export function Navigation({ currentId }: { currentId: PageId }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = (id: PageId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div>
      <div
        className={uppies({
          show: currentId !== "about" && currentId !== "absolute",
        })}
        onClick={() => handleClick("absolute")}
      >
        <ArrowUp className="fill-cyan-500" />
      </div>
      <div
        className="group fixed left-5 top-5 z-10 cursor-pointer md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-12 w-12 fill-slate-200 group-hover:fill-slate-400" />
      </div>
      <div className={mobileNav({ isOpen })}>
        <div className="fixed left-5 top-20 space-y-px text-lg">
          <NavItems currentId={currentId} handleClick={handleClick} />
        </div>
      </div>
      <div className="hidden items-start justify-center space-y-2 pt-10 md:flex md:flex-col md:pt-0">
        <NavItems currentId={currentId} handleClick={handleClick} />
      </div>
    </div>
  );
}
