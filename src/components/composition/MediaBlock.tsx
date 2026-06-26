import type { ReactNode } from "react";
import { AspectRatio } from "@/components/composition/AspectRatio";
import { Frame } from "@/components/composition/Frame";
import { cn } from "@/lib/cn";

type MediaBlockProps = Readonly<{
  children?: ReactNode;
  className?: string;
}>;

export function MediaBlock({ children, className }: MediaBlockProps) {
  return (
    <Frame className={cn("cmp-media-block", className)} variant="muted">
      <AspectRatio ratio="photo">{children}</AspectRatio>
    </Frame>
  );
}
