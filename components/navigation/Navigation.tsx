import { navData } from "@/data";
import { cva } from "class-variance-authority";

export type PageId = "about" | "proficiencies" | "experience";

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

type NavItem = {
  text: string;
  id: PageId;
};

const navItems: NavItem[] = navData as NavItem[]; // Need actual type guarding / checking

export function Navigation({ currentId }: { currentId: PageId }) {
  const handleClick = (id: PageId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col items-start justify-center space-y-2 pt-10 leading-normal text-slate-200 md:pt-0">
      {navItems.map((x) => (
        <button
          key={`${x.id}`}
          className="group flex"
          onClick={() => handleClick(x.id)}
        >
          <div className={navLink({ active: currentId == x.id })} />
          <div className="flex w-full">{x.text}</div>
        </button>
      ))}
    </div>
  );
}
