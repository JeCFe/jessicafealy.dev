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
      {showArrow && (
        <span aria-hidden="true" className="ml-1 inline-block no-underline">
          ↗
        </span>
      )}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
