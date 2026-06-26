"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import {
  createAnimationContext,
  fadeIn,
  fadeUp,
  initialStates,
  reveal,
  scale,
  sectionTransition,
  setupGsap,
} from "@/lib/animation";
import { prefersReducedMotion } from "@/lib/animation/reducedMotion";

type SectionAnimationVariant =
  | "fade"
  | "fadeUp"
  | "reveal"
  | "scale"
  | "section";

type SectionAnimationProps = Readonly<{
  children: ReactNode;
  className?: string;
  once?: boolean;
  variant?: SectionAnimationVariant;
}>;

const variantAnimation = {
  fade: fadeIn,
  fadeUp,
  reveal,
  scale,
  section: sectionTransition,
} as const;

const initialStateByVariant = {
  fade: initialStates.fade,
  fadeUp: initialStates.fadeUp,
  reveal: initialStates.reveal,
  scale: initialStates.scale,
  section: initialStates.fadeUp,
} as const;

export function SectionAnimation({
  children,
  className,
  once = true,
  variant = "fadeUp",
}: SectionAnimationProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    if (prefersReducedMotion()) {
      return;
    }

    const context = createAnimationContext(
      () => {
        const { gsap } = setupGsap();

        gsap.set(root, initialStateByVariant[variant]);
        gsap.to(root, {
          ...variantAnimation[variant](),
          scrollTrigger: {
            end: "bottom top",
            once,
            start: "top 82%",
            trigger: root,
          },
        });
      },
      { scope: root },
    );

    return () => {
      context?.revert();
    };
  }, [once, variant]);

  return (
    <div className={className} ref={rootRef}>
      {children}
    </div>
  );
}
