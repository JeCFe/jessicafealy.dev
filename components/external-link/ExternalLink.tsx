import { siteData } from "@/data";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ExternalLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
  children: ReactNode;
  showArrow?: boolean;
  variant?: "text" | "unstyled";
};

export const ExternalLink = ({
  href,
  children,
  className,
  variant = "text",
  showArrow = variant === "text",
  "aria-label": ariaLabel,
  ...props
}: ExternalLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        ariaLabel
          ? `${ariaLabel} (${siteData.accessibility.opensInNewTab})`
          : undefined
      }
      className={[
        showArrow && "group/external-link",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300",
        variant === "text" &&
          "rounded-sm underline decoration-cyan-400/60 decoration-2 underline-offset-4 transition-colors hover:decoration-cyan-300",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
      {showArrow && (
        <span className="whitespace-nowrap">
          {"\u00a0"}
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="inline-block h-[1.15em] w-[1.15em] shrink-0 align-[-0.15em] transition-transform duration-200 group-hover/external-link:-translate-y-0.5 group-hover/external-link:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
          >
            <path d="M5 11 11 5" />
            <path d="M6 5h5v5" />
          </svg>
        </span>
      )}
      <span className="sr-only"> ({siteData.accessibility.opensInNewTab})</span>
    </a>
  );
};
