import { cn } from "@/lib/cn";

type SpacerSize = "xs" | "sm" | "md" | "lg" | "xl";

type SpacerProps = Readonly<{
  className?: string;
  size?: SpacerSize;
}>;

export function Spacer({ className, size = "md" }: SpacerProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("cmp-spacer", `cmp-spacer-${size}`, className)}
    />
  );
}
