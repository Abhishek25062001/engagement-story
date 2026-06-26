import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type FrameVariant = "minimal" | "paper" | "muted";

type FrameProps<TElement extends ElementType = "div"> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
  variant?: FrameVariant;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

export function Frame<TElement extends ElementType = "div">({
  as,
  children,
  className,
  variant = "paper",
  ...props
}: FrameProps<TElement>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn("cmp-frame", `cmp-frame-${variant}`, className)}
      {...props}
    >
      {children}
    </Component>
  );
}
