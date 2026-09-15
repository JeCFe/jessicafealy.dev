import { ExternalLink, MarkdownContent, PillList, Typography } from "..";

export type ExperienceProps = {
  employer: {
    name: string;
    href: string;
  };
  roles: ExperienceRole[];
};

export type ExperienceRole = {
  jobTitle: string;
  date: string;
  highlights: string[];
  pills?: string[];
  context?: string;
};

export const ExperienceBox = ({ employer, roles }: ExperienceProps) => {
  const [currentRole, ...previousRoles] = roles;

  if (!currentRole) return null;

  const renderRoleDetails = (role: ExperienceRole) => (
    <>
      {role.context && (
        <Typography as="small" className="mt-2 block">
          {role.context}
        </Typography>
      )}
      {role.highlights.length > 0 && (
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
      )}
      <PillList items={role.pills} />
    </>
  );

  return (
    <article className="relative border-l border-slate-700 pl-7 sm:pl-9">
      <div className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Typography as="h3">{currentRole.jobTitle}</Typography>
          <ExternalLink
            href={employer.href}
            className="mt-1 inline-block font-semibold text-cyan-200"
          >
            {employer.name}
          </ExternalLink>
        </div>
        <Typography
          as="small"
          className="shrink-0 uppercase tracking-wider sm:pt-2"
        >
          {currentRole.date}
        </Typography>
      </div>

      {renderRoleDetails(currentRole)}

      {previousRoles.map((role) => (
        <section
          className="mt-10 border-t border-slate-800 pt-8"
          key={`${role.jobTitle}-${role.date}`}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <Typography as="h3">{role.jobTitle}</Typography>
            <Typography
              as="small"
              className="shrink-0 uppercase tracking-wider sm:pt-2"
            >
              {role.date}
            </Typography>
          </div>
          {renderRoleDetails(role)}
        </section>
      ))}
    </article>
  );
};
