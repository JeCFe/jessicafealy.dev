import type { ProjectMetadata as ProjectMetadataFields } from "@/content";

const ProjectMetadata = ({ metadata }: { metadata: ProjectMetadataFields }) => {
  const details = [
    { label: "Role", value: metadata.role },
    { label: "Scope", value: metadata.scope },
    { label: "Tech Stack", value: metadata.techStack },
  ].filter((detail) => detail.value);

  if (details.length === 0) return null;

  return (
    <section
      aria-label="Project details"
      className="mt-8 rounded-2xl border border-slate-700/80 bg-slate-900/50 p-6 sm:p-8"
    >
      <dl className="divide-y divide-slate-700/70">
        {details.map(({ label, value }) => (
          <div
            className="grid gap-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6"
            key={label}
          >
            <dt className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300 sm:pt-1">
              {label}
            </dt>
            <dd className="min-w-0 break-words text-sm leading-relaxed text-slate-200">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export { ProjectMetadata };
