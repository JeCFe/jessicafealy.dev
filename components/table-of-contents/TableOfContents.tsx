import { Typography } from "..";
import type { MarkdownHeading } from "../markdown-content";

export const TableOfContents = ({
  headings,
}: {
  headings: MarkdownHeading[];
}) => (
  <nav
    aria-labelledby="table-of-contents-heading"
    className="mt-10 rounded-2xl"
  >
    <Typography as="h2" id="table-of-contents-heading" className="mt-0">
      Table of Contents
    </Typography>
    <ul className="mt-5 list-disc space-y-1 pl-5">
      {headings.map(({ depth, id, title }, index) => (
        <li key={`${id}-${index}`} className={depth > 2 ? "ml-5" : undefined}>
          <a
            href={`#${id}`}
            className="rounded-sm font-bold text-cyan-200 underline decoration-cyan-400/60 underline-offset-4 transition-colors hover:decoration-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
