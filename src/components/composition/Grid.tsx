import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type GridColumns = "auto" | "two" | "three" | "four";

type GridProps<TElement extends ElementType = "div"> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
  columns?: GridColumns;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

export function Grid<TElement extends ElementType = "div">({
  as,
  children,
  className,
  columns = "auto",
  ...props
}: GridProps<TElement>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn("cmp-grid", `cmp-grid-${columns}`, className)}
      {...props}
    >
      {children}
    </Component>
  );
}
