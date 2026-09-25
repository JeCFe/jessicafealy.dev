import { cn } from "@/lib";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import type { ComponentProps } from "react";

export const Sheet = (props: ComponentProps<typeof SheetPrimitive.Root>) => (
  <SheetPrimitive.Root data-slot="sheet" {...props} />
);

export const SheetTrigger = SheetPrimitive.Trigger;

export const SheetContent = ({
  children,
  className,
  ...props
}: ComponentProps<typeof SheetPrimitive.Content>) => {
  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay className="fixed inset-0 z-20 bg-slate-950/95 backdrop-blur" />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn("fixed inset-0 z-20 overflow-y-auto", className)}
        {...props}
      >
        {children}
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  );
};

export const SheetTitle = ({
  className,
  ...props
}: ComponentProps<typeof SheetPrimitive.Title>) => {
  return <SheetPrimitive.Title className={className} {...props} />;
};
