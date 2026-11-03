import { cn } from "@/lib";
import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { ContentImage, Typography } from "..";

const cardVariants = cva(
  "relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/70 backdrop-blur",
  {
    variants: {
      interactive: {
        true: "transition-all duration-300 group-hover:border-cyan-300/70 group-active:scale-[0.99]",
      },
    },
  },
);

const layoutVariants = cva("grid", {
  variants: {
    imageLayout: {
      side: "md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]",
      wide: "grid-cols-1",
      none: "grid-cols-1",
    },
  },
});

const imageFrameVariants = cva("border-b border-slate-700/70", {
  variants: {
    imageLayout: {
      side: "min-h-56 md:min-h-full md:border-b-0 md:border-r",
      wide: "aspect-[16/9] min-h-0",
    },
  },
});

type ContentCardProps = VariantProps<typeof cardVariants> & {
  heading: ReactNode;
  children: ReactNode;
  image?: string | null;
  imageAlt?: string | null;
  imageLayout?: NonNullable<
    VariantProps<typeof imageFrameVariants>["imageLayout"]
  >;
  actions?: ReactNode;
  footer?: ReactNode;
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
    <article className={cardVariants({ interactive })}>
      <div
        className={layoutVariants({
          imageLayout: imageSrc ? imageLayout : "none",
        })}
      >
        {imageSrc && (
          <ContentImage
            src={imageSrc}
            alt={imageAlt ?? ""}
            loading="lazy"
            frameClassName={imageFrameVariants({ imageLayout })}
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
