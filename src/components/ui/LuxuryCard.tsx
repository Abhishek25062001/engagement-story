import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type LuxuryCardVariant =
  | "paper"
  | "embossed"
  | "goldOutline"
  | "minimal"
  | "elevated";

type LuxuryCardPadding = "sm" | "md" | "lg";

const cardVariantClass: Record<LuxuryCardVariant, string> = {
  paper: "ds-card-paper",
  embossed: "ds-card-embossed",
  goldOutline: "ds-card-gold-outline",
  minimal: "ds-card-minimal",
  elevated: "ds-card-elevated",
};

type LuxuryCardProps<TElement extends ElementType = "div"> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
  padding?: LuxuryCardPadding;
  variant?: LuxuryCardVariant;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

export function LuxuryCard<TElement extends ElementType = "div">({
  as,
  children,
  className,
  padding = "md",
  variant = "paper",
  ...props
}: LuxuryCardProps<TElement>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "ds-card",
        cardVariantClass[variant],
        `ds-card-padding-${padding}`,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
