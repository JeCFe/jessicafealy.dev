import { cn } from "@/lib";
import type { ComponentProps, ReactNode } from "react";
import { Typography } from "..";

type SectionProps = ComponentProps<"section"> & {
  heading: ReactNode;
  eyebrow: string;
};

export const Section = ({
  heading,
  eyebrow,
  className,
  children,
  ...props
}: SectionProps) => (
  <section className={cn("mt-24 scroll-mt-24", className)} {...props}>
    <div className="mb-8 flex items-center gap-4">
      <Typography
        as="small"
        className="font-semibold uppercase tracking-widest !text-cyan-300"
      >
        {eyebrow}
      </Typography>
      <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/50 to-transparent" />
      <Typography as="h2">{heading}</Typography>
    </div>
    {children}
  </section>
);
