import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type StackGap = "xs" | "sm" | "md" | "lg" | "xl";

type StackProps<TElement extends ElementType = "div"> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
  gap?: StackGap;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

export function Stack<TElement extends ElementType = "div">({
  as,
  children,
  className,
  gap = "md",
  ...props
}: StackProps<TElement>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn("cmp-stack", `cmp-stack-${gap}`, className)}
      {...props}
    >
      {children}
    </Component>
  );
}
