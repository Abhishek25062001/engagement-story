import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SurfacePadding = "none" | "sm" | "md" | "lg";
type SurfaceVariant = "default" | "muted" | "raised" | "transparent";

type SurfaceProps<TElement extends ElementType = "div"> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
  padding?: SurfacePadding;
  variant?: SurfaceVariant;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

export function Surface<TElement extends ElementType = "div">({
  as,
  children,
  className,
  padding = "md",
  variant = "default",
  ...props
}: SurfaceProps<TElement>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "cmp-surface",
        `cmp-surface-${variant}`,
        `cmp-surface-padding-${padding}`,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
