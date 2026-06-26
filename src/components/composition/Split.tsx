import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SplitAlign = "start" | "center" | "end";
type SplitRatio = "equal" | "majorStart" | "majorEnd";

const splitRatioClass: Record<SplitRatio, string | null> = {
  equal: null,
  majorStart: "cmp-split-major-start",
  majorEnd: "cmp-split-major-end",
};

type SplitProps<TElement extends ElementType = "div"> = {
  align?: SplitAlign;
  as?: TElement;
  children: ReactNode;
  className?: string;
  ratio?: SplitRatio;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

export function Split<TElement extends ElementType = "div">({
  align = "center",
  as,
  children,
  className,
  ratio = "equal",
  ...props
}: SplitProps<TElement>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "cmp-split",
        `cmp-split-${align}`,
        splitRatioClass[ratio],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
