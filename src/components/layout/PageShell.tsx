import type { ReactNode } from "react";

type PageShellProps = Readonly<{
  children: ReactNode;
}>;

export function PageShell({ children }: PageShellProps) {
  return <main className="min-h-screen bg-background">{children}</main>;
}
