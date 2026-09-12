import { Typography } from "../typography";

export const SectionHeading = ({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-8 flex items-center gap-4">
      <Typography
        as="small"
        className="font-semibold uppercase tracking-widest !text-cyan-300"
      >
        {eyebrow}
      </Typography>
      <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/50 to-transparent" />
      <Typography as="h2">{children}</Typography>
    </div>
  );
};
