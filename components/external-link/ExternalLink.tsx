import { AnchorHTMLAttributes, ReactNode } from "react";

type ExternalLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
  children: ReactNode;
  showArrow?: boolean;
};

export function ExternalLink({
  href,
  children,
  className = "",
  showArrow = true,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-sm underline decoration-cyan-400/60 decoration-2 underline-offset-4 transition-colors hover:decoration-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${className}`}
      {...props}
    >
      {children}
      {showArrow ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2 inline-block h-[1.15em] w-[1.15em] shrink-0 align-[-0.15em]"
        >
          <path d="M5 11 11 5" />
          <path d="M6 5h5v5" />
        </svg>
      ) : null}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
