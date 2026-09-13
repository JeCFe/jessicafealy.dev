import { cn } from "@/lib";
import Image, { type ImageProps } from "next/image";

type ContentImageProps = Omit<ImageProps, "fill" | "width" | "height"> & {
  frameClassName: string;
  sizes: string;
};

export const ContentImage = ({
  frameClassName,
  className,
  alt,
  ...props
}: ContentImageProps) => (
  <div className={cn("relative overflow-hidden", frameClassName)}>
    <Image
      {...props}
      alt={alt}
      fill
      className={cn("object-cover", className)}
    />
  </div>
);
