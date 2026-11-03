import { cva } from "class-variance-authority";

export const iconControlVariants = cva(
  "flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 transition-colors hover:border-cyan-300 hover:bg-cyan-300 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 disabled:cursor-not-allowed disabled:opacity-40",
  {
    variants: {
      tone: {
        neutral: "text-slate-300",
        accent: "text-cyan-300",
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);
