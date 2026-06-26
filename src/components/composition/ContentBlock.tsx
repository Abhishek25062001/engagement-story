import type { ReactNode } from "react";
import { Flow } from "@/components/composition/Flow";
import { cn } from "@/lib/cn";

type ContentBlockProps = Readonly<{
  children: ReactNode;
  className?: string;
  isWide?: boolean;
}>;

export function ContentBlock({
  children,
  className,
  isWide = false,
}: ContentBlockProps) {
  return (
    <Flow
      className={cn(
        "cmp-content-block",
        isWide && "cmp-content-block-wide",
        className,
      )}
      space="md"
    >
      {children}
    </Flow>
  );
}
