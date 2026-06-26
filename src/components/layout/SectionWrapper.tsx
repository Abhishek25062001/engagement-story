import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

type SectionWrapperProps = Readonly<{
  children: ReactNode;
  className?: string;
  id: string;
}>;

export function SectionWrapper({
  children,
  className = "",
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("ds-section", className)}>
      <Container>{children}</Container>
    </section>
  );
}
