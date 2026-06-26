import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type TypographyVariant =
  | "display"
  | "heading"
  | "subheading"
  | "title"
  | "body"
  | "caption"
  | "label"
  | "overline";

const defaultElementByVariant = {
  display: "h1",
  heading: "h2",
  subheading: "h3",
  title: "h4",
  body: "p",
  caption: "p",
  label: "span",
  overline: "p",
} as const satisfies Record<TypographyVariant, ElementType>;

type TypographyProps<TElement extends ElementType = "p"> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
  variant?: TypographyVariant;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

export function Typography<TElement extends ElementType = "p">({
  as,
  children,
  className,
  variant = "body",
  ...props
}: TypographyProps<TElement>) {
  const Component = as ?? defaultElementByVariant[variant];

  return (
    <Component
      className={cn("ds-typography", `ds-typography-${variant}`, className)}
      {...props}
    >
      {children}
    </Component>
  );
}
