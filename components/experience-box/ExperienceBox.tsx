import { ExternalLink, MarkdownContent, PillList, Typography } from "..";

export type ExperienceProps = {
  employer: {
    name: string;
    href: string;
    employmentSummary?: string;
  };
  roles: ExperienceRole[];
  collapseCurrentRole?: boolean;
  labels?: { showHighlights: string; hideHighlights: string };
};

export type ExperienceRole = {
  jobTitle: string;
  date: string;
  additionalRoles?: { jobTitle: string; date: string }[];
  highlights: string[];
  pills?: string[];
  context?: string;
};

const RoleHeading = ({ role }: { role: ExperienceRole }) => (
  <>
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
      <Typography as="h3" className="!text-xl">
        {role.jobTitle}
      </Typography>
      <Typography
        as="small"
        className="shrink-0 uppercase tracking-wider sm:pt-2"
      >
        {role.date}
      </Typography>
    </div>
    {role.additionalRoles?.map(({ jobTitle, date }) => (
      <div
        className="mt-2 flex justify-between gap-4"
        key={`${jobTitle}-${date}`}
      >
        <Typography as="small" className="font-semibold text-slate-300">
          {jobTitle}
        </Typography>
        <Typography as="small" className="shrink-0 uppercase tracking-wider">
          {date}
        </Typography>
      </div>
    ))}
  </>
);

export const ExperienceBox = ({
  employer,
  roles,
  collapseCurrentRole = false,
  labels,
}: ExperienceProps) => {
  const [currentRole, ...previousRoles] = roles;

  if (!currentRole) return null;

  const renderRoleDetails = (role: ExperienceRole, collapsed = false) => (
    <>
      {role.context && (
        <Typography as="small" className="mt-2 block">
          {role.context}
        </Typography>
      )}
      {role.highlights.length > 0 &&
        (collapsed && labels ? (
          <details className="group mt-4">
            <summary className="inline-flex w-fit cursor-pointer list-none items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 font-poppins text-xs font-medium text-cyan-200 transition-colors hover:border-cyan-300/40 hover:bg-cyan-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 [&::-webkit-details-marker]:hidden">
              <span
                aria-hidden="true"
                className="font-mono text-sm leading-none text-cyan-300"
              >
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">−</span>
              </span>
              <span className="group-open:hidden">{labels.showHighlights}</span>
              <span className="hidden group-open:inline">
                {labels.hideHighlights}
              </span>
            </summary>
            <Typography as="ul" className="mt-4 space-y-3">
              {role.highlights.map((highlight) => (
                <li className="relative pl-5" key={highlight}>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-3 h-1 w-1 rounded-full bg-pink-400"
                  />
                  <MarkdownContent content={highlight} variant="inline" />
                </li>
              ))}
            </Typography>
          </details>
        ) : (
          <Typography as="ul" className="mt-6 space-y-3">
            {role.highlights.map((highlight) => (
              <li className="relative pl-5" key={highlight}>
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-3 h-1 w-1 rounded-full bg-pink-400"
                />
                <MarkdownContent content={highlight} variant="inline" />
              </li>
            ))}
          </Typography>
        ))}
      <PillList items={role.pills} className={collapsed ? "mt-3" : undefined} />
    </>
  );

  return (
    <article className="relative border-l border-slate-700 pl-7 sm:pl-9">
      <div className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
      <header className="mb-8">
        <ExternalLink
          href={employer.href}
          className="inline-block font-poppins text-lg font-semibold leading-tight text-cyan-200 sm:text-2xl"
        >
          {employer.name}
        </ExternalLink>
        {employer.employmentSummary && (
          <Typography as="small" className="mt-2 block">
            {employer.employmentSummary}
          </Typography>
        )}
      </header>

      <RoleHeading role={currentRole} />

      {renderRoleDetails(currentRole, collapseCurrentRole)}

      {previousRoles.map((role) => (
        <section
          className="mt-10 border-t border-slate-800 pt-8"
          key={`${role.jobTitle}-${role.date}`}
        >
          <RoleHeading role={role} />
          {renderRoleDetails(role, true)}
        </section>
      ))}
    </article>
  );
};
