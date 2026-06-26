import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type FlowSpace = "xs" | "sm" | "md" | "lg" | "xl";

type FlowProps<TElement extends ElementType = "div"> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
  space?: FlowSpace;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

export function Flow<TElement extends ElementType = "div">({
  as,
  children,
  className,
  space = "md",
  ...props
}: FlowProps<TElement>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn("cmp-flow", `cmp-flow-${space}`, className)}
      {...props}
    >
      {children}
    </Component>
  );
}
