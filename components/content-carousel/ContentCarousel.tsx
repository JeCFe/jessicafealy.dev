import { Children, type ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselControls,
  CarouselItem,
} from "../ui/carousel";

export const ContentCarousel = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <Carousel opts={{ align: "start" }} aria-label={label}>
    <CarouselControls className="mt-6 flex justify-end gap-2" />
    <CarouselContent className="mt-4">
      {Children.map(children, (child) => (
        <CarouselItem>{child}</CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
);
