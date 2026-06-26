import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

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
    <section
      id={id}
      className={`border-b border-border py-[var(--space-section)] ${className}`.trim()}
    >
      <Container>
        <h2 className="type-section-title">{children}</h2>
      </Container>
    </section>
  );
}
