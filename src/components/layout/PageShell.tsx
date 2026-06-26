import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PageShellProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

export function PageShell({ children, className }: PageShellProps) {
  return <main className={cn("ds-page-shell", className)}>{children}</main>;
}
