"use client";

import { cn } from "@/lib";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
} from "react";
import { iconControlVariants } from "./icon-control";

type CarouselApi = UseEmblaCarouselType[1];
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0];

type CarouselContextValue = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  canScrollPrevious: boolean;
  canScrollNext: boolean;
  scrollPrevious: () => void;
  scrollNext: () => void;
};

const CarouselContext = createContext<CarouselContextValue | null>(null);

const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used inside Carousel.");
  return context;
};

type CarouselProps = HTMLAttributes<HTMLDivElement> & {
  opts?: CarouselOptions;
};

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, opts, children, onKeyDownCapture, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(opts);
    const [canScrollPrevious, setCanScrollPrevious] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const updateControls = useCallback((carouselApi: CarouselApi) => {
      if (!carouselApi) return;
      setCanScrollPrevious(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    }, []);

    const scrollPrevious = useCallback(() => api?.scrollPrev(), [api]);
    const scrollNext = useCallback(() => api?.scrollNext(), [api]);

    useEffect(() => {
      if (!api) return;

      api.on("reInit", updateControls);
      api.on("select", updateControls);
      const initialUpdate = window.setTimeout(() => updateControls(api), 0);

      return () => {
        window.clearTimeout(initialUpdate);
        api.off("reInit", updateControls);
        api.off("select", updateControls);
      };
    }, [api, updateControls]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          canScrollPrevious,
          canScrollNext,
          scrollPrevious,
          scrollNext,
        }}
      >
        <div
          ref={ref}
          role="region"
          aria-roledescription="carousel"
          className={cn("relative", className)}
          onKeyDownCapture={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              scrollPrevious();
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              scrollNext();
            }
            onKeyDownCapture?.(event);
          }}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

export const CarouselContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn("-ml-4 flex touch-pan-y", className)}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

export const CarouselItem = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="group"
    aria-roledescription="slide"
    className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", className)}
    {...props}
  />
));
CarouselItem.displayName = "CarouselItem";

const CarouselControl = ({
  direction,
  label,
  className,
  ...props
}: Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "onClick" | "disabled"
> & {
  direction: "previous" | "next";
  label: string;
}) => {
  const { canScrollPrevious, canScrollNext, scrollPrevious, scrollNext } =
    useCarousel();
  const previous = direction === "previous";
  const Icon = previous ? ChevronLeft : ChevronRight;

  return (
    <button
      {...props}
      type="button"
      className={cn(iconControlVariants(), className)}
      disabled={!(previous ? canScrollPrevious : canScrollNext)}
      onClick={previous ? scrollPrevious : scrollNext}
    >
      <Icon aria-hidden="true" className="h-5 w-5" />
      <span className="sr-only">{label}</span>
    </button>
  );
};

export const CarouselControls = ({
  previousLabel,
  nextLabel,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  previousLabel: string;
  nextLabel: string;
}) => (
  <div {...props}>
    <CarouselControl direction="previous" label={previousLabel} />
    <CarouselControl direction="next" label={nextLabel} />
  </div>
);
