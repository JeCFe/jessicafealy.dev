import { cn } from "@/lib";
import type { ReactNode } from "react";

export const Pill = ({ children }: { children: ReactNode }) => {
  return (
    <span className="flex w-fit items-center rounded-full border border-pink-400/20 bg-pink-400/10 px-3 py-1 font-mono text-[0.7rem] font-semibold leading-5 text-pink-200">
      {children}
    </span>
  );
};

export const PillList = ({
  items,
  className,
}: {
  items?: readonly string[];
  className?: string;
}) =>
  items?.length ? (
    <div className={cn("mt-6 flex flex-wrap gap-2", className)}>
      {items.map((item, index) => (
        <Pill key={`${item}-${index}`}>{item}</Pill>
      ))}
    </div>
  ) : null;
