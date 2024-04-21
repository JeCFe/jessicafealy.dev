import { Code, OpenWeb, DeployedCode } from "@/assets";
import { Info, ArrowUp } from "@jecfe/react-design-system";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { useState } from "react";
import { Pill } from "..";

const links = cva(
  "inline-block h-8 w-8 fill-blue-500 transition duration-200 ease-in-out hover:fill-blue-900",
);

const statusText = cva(
  "font-bold p-1 flex flex-row justify-center item-center h-14 text-left",
  {
    variants: {
      status: {
        active: "text-green-500",
        maintain: "text-amber-500",
        closed: "text-red-500",
      },
    },
  },
);

const statusIcon = cva("h-8 w-8", {
  variants: {
    status: {
      active: "fill-green-500",
      maintain: "fill-amber-500",
      closed: "fill-red-500",
    },
  },
});

const accordionIcon = cva("cursor-pointer transition-all duration-200", {
  variants: {
    open: {
      false: "rotate-180",
      true: "rotate-0",
    },
    status: {
      active: "fill-green-500 hover:fill-green-700",
      maintain: "fill-amber-500 hover:fill-amber-700",
      closed: "fill-red-500 hover:fill-red-700",
    },
  },
});

const accordion = cva(
  [
    "transition-max-height overflow-hidden duration-300 ease-in-out list-disc",
    "border-l border-slate-200 pl-10 ml-2",
    "text-slate-400 leading-normal text-sm",
  ],
  {
    variants: {
      open: {
        true: "max-h-96 opacity-100",
        false: "max-h-0 opacity-0",
      },
    },
    defaultVariants: {
      open: true,
    },
  },
); // Need to export this from the DS or change how the accordion in the DS is set up

const customOrder = ["deployed", "web", "git"]; // Desired order

function compareString(a: ProjectLink, b: ProjectLink) {
  const indexA = customOrder.indexOf(a.type);
  const indexB = customOrder.indexOf(b.type);
  if (indexA === -1 || indexB === -1) {
    return 0;
  }
  return indexA - indexB;
}

type ProjectLink = {
  href: string;
  type: string;
};

export type ProjectBoxProps = {
  heading: string;
  link: ProjectLink[];
  date: string;
  description: string;
  pills?: string[];
  type?: "active" | "maintain" | "closed";
  improvements?: string[];
};

export function ProjectBox({
  heading,
  link,
  date,
  description,
  pills,
  type,
  improvements,
}: ProjectBoxProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="z-10 rounded-xl transition-colors duration-300 ease-in-out md:p-8 md:hover:bg-slate-800/70 md:hover:shadow-xl">
      <div className="flex flex-row">
        <h2 className="text-2xl font-medium tracking-tight text-slate-200">
          {heading}
        </h2>
        <div className="flex flex-grow" />

        <div className="flex space-x-2 text-right text-2xl font-medium tracking-tight">
          {link.sort(compareString).map((x, i) => (
            <Link key={`project link-${i}`} href={x.href} target="_blank">
              {x.type === "git" && <Code className={links()} />}
              {x.type === "web" && <OpenWeb className={links()} />}
              {x.type === "deployed" && <DeployedCode className={links()} />}
            </Link>
          ))}
        </div>
      </div>

      <h3 className="text-sm leading-normal text-slate-400">{date}</h3>

      <p className="my-4 leading-normal text-slate-400">{description}</p>
      <div className={statusText({ status: type })}>
        <div className="flex h-full items-center justify-center">
          <Info className={statusIcon({ status: type })} />
        </div>

        <div className="ml-4 flex items-center">
          {type === "active" &&
            "Actively maintained with continued feature delivery."}
          {type === "maintain" &&
            "Critical maintenance only with no plans for new features."}
          {type === "closed" &&
            "No longer maintained with no plans for new features."}
        </div>
        <div className="flex flex-grow" />
        {improvements && (
          <div className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
            <ArrowUp
              className={accordionIcon({ open: isOpen, status: type })}
            />
          </div>
        )}
      </div>
      {improvements && (
        <ul className={accordion({ open: isOpen })}>
          {improvements.map((x, i) => (
            <li className="pl-1" key={`improvements-${i}`}>
              {x}
            </li>
          ))}
        </ul>
      )}

      <div className="pointer-events-none mt-4 flex flex-wrap  gap-2">
        {pills?.map((x, i) => <Pill key={`${x}-${i}`}>{x}</Pill>)}
      </div>
    </div>
  );
}
