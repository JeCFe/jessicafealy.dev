import { cn } from "@/lib";
import Image, { type ImageProps } from "next/image";

type ContentImageProps = Omit<ImageProps, "fill" | "width" | "height"> & {
  frameClassName: string;
};

export const ContentImage = ({
  frameClassName,
  className,
  alt,
  sizes = "100vw",
  ...props
}: ContentImageProps) => (
  <div className={cn("relative overflow-hidden", frameClassName)}>
    <Image
      {...props}
      alt={alt}
      fill
      sizes={sizes}
      className={cn("object-cover", className)}
    />
  </div>
);
