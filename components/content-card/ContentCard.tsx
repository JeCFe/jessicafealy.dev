import { cn } from "@/lib";
import type { ReactNode } from "react";
import { ContentImage, Typography } from "..";

type ContentCardProps = {
  heading: ReactNode;
  children: ReactNode;
  image?: string | null;
  imageAlt?: string | null;
  imageLayout?: "side" | "wide";
  actions?: ReactNode;
  footer?: ReactNode;
  interactive?: boolean;
};

export const ContentCard = ({
  heading,
  children,
  image,
  imageAlt,
  imageLayout = "side",
  actions,
  footer,
  interactive = false,
}: ContentCardProps) => {
  const imageSrc = image?.trim();
  const usesWideImage = imageLayout === "wide";

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/70 shadow-[0_24px_80px_-44px_rgba(34,211,238,0.5)] backdrop-blur",
        interactive &&
          "transition-all duration-300 group-hover:border-cyan-300/70 group-hover:shadow-[0_30px_90px_-38px_rgba(34,211,238,0.7)] group-active:scale-[0.99]",
      )}
    >
      <div
        className={cn(
          "grid",
          imageSrc && !usesWideImage
            ? "md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
            : "grid-cols-1",
        )}
      >
        {imageSrc && (
          <ContentImage
            src={imageSrc}
            alt={imageAlt ?? ""}
            loading="lazy"
            frameClassName={cn(
              "border-b border-slate-700/70",
              usesWideImage
                ? "aspect-[16/9] min-h-0"
                : "min-h-56 md:min-h-full md:border-b-0 md:border-r",
            )}
            sizes={
              usesWideImage
                ? "(min-width: 1024px) 760px, 100vw"
                : "(min-width: 768px) 320px, 100vw"
            }
            className={cn(
              "object-center",
              interactive &&
                "transition-transform duration-500 group-hover:scale-[1.02]",
            )}
          />
        )}
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <Typography as="h3">{heading}</Typography>
            {actions}
          </div>
          {children}
          {footer}
        </div>
      </div>
    </article>
  );
};
