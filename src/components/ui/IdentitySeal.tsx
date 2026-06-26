import { cn } from "@/lib/cn";

type IdentitySealProps = Readonly<{
  className?: string;
}>;

export function IdentitySeal({ className }: IdentitySealProps) {
  return (
    <span aria-hidden="true" className={cn("identity-seal", className)}>
      <span>S</span>
      <span>&amp;</span>
      <span>H</span>
    </span>
  );
}
