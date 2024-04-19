import { ReactNode } from "react";

export function Pill({ children }: { children: ReactNode }) {
  return (
    <div className="text-md flex w-fit items-center rounded-full bg-pink-400/10 px-3 py-1 font-medium leading-5 text-pink-300">
      {children}
    </div>
  );
}
