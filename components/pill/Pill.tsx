import { ReactNode } from "react";

export const Pill = ({ children }: { children: ReactNode }) => {
  return (
    <span className="flex w-fit items-center rounded-full border border-pink-400/20 bg-pink-400/10 px-3 py-1 font-mono text-[0.7rem] font-semibold leading-5 text-pink-200">
      {children}
    </span>
  );
};
