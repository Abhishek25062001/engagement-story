import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ClusterGap = "xs" | "sm" | "md" | "lg" | "xl";
type ClusterJustify = "start" | "center" | "end" | "between";

type ClusterProps<TElement extends ElementType = "div"> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
  gap?: ClusterGap;
  justify?: ClusterJustify;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

export function Cluster<TElement extends ElementType = "div">({
  as,
  children,
  className,
  gap = "md",
  justify = "start",
  ...props
}: ClusterProps<TElement>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "cmp-cluster",
        `cmp-stack-${gap}`,
        `cmp-cluster-${justify}`,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
