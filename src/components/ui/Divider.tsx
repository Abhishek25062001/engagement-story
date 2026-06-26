import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type DividerOrientation = "horizontal" | "vertical";
type DividerTone = "neutral" | "gold";

type DividerProps = HTMLAttributes<HTMLHRElement> & {
  decorative?: boolean;
  orientation?: DividerOrientation;
  tone?: DividerTone;
};

export function Divider({
  className,
  decorative = true,
  orientation = "horizontal",
  tone = "neutral",
  ...props
}: DividerProps) {
  return (
    <hr
      aria-hidden={decorative || undefined}
      className={cn(
        "ds-divider",
        `ds-divider-${orientation}`,
        tone === "gold" && "ds-divider-gold",
        className,
      )}
      role={decorative ? "presentation" : "separator"}
      {...props}
    />
  );
}
