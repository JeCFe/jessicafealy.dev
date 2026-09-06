export function SectionHeading({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
        {eyebrow}
      </span>
      <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/50 to-transparent" />
      <h2 className="text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
        {children}
      </h2>
    </div>
  );
}
