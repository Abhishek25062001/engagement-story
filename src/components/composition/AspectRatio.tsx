import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type AspectRatioValue = "square" | "video" | "photo" | "wide";

type AspectRatioProps = Readonly<{
  children?: ReactNode;
  className?: string;
  ratio?: AspectRatioValue;
}>;

export function AspectRatio({
  children,
  className,
  ratio = "photo",
}: AspectRatioProps) {
  return (
    <div className={cn("cmp-aspect-ratio", `cmp-aspect-${ratio}`, className)}>
      {children}
    </div>
  );
}
