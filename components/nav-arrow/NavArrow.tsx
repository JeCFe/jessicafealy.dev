import { ArrowDown } from "@jecfe/react-design-system";
import { cva } from "class-variance-authority";
import Link from "next/link";

const arrow = cva(
  "md:visable hidden w-full flex-row items-center justify-center pb-16 pt-20 text-center md:flex md:pt-0",
  {
    variants: {
      direction: {
        up: "rotate-180",
        down: "",
      },
    },
    defaultVariants: {
      direction: "down",
    },
  },
);

type Props = {
  id: string;
  direction: "up" | "down";
};

export function NavArrow({ id, direction }: Props) {
  const handleClick = () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    console.log(id);
  };
  return (
    <div className={arrow({ direction })}>
      <button
        className="rounded-full border-2 glow:border-pink-500"
        onClick={handleClick}
      >
        <ArrowDown className="fill-white hover:fill-cyan-500" />
      </button>
    </div>
  );
}
