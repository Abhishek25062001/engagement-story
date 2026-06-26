import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PageShellProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

export function PageShell({ children, className }: PageShellProps) {
  return (
    <main className={cn("ds-page-shell", className)}>
      <div aria-hidden="true" className="ambient-world">
        <span className="ambient-world-light" />
        <span className="ambient-world-vignette" />
        <span className="ambient-world-grain" />
      </div>
      <div className="ds-page-content">{children}</div>
    </main>
  );
}
