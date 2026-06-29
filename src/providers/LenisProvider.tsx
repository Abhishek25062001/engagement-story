"use client";

import type { ReactNode } from "react";
import type Lenis from "lenis";
import { ReactLenis, useLenis } from "lenis/react";
import { experienceDirector } from "@/engine";
import type { TimelineDirection } from "@/engine";

type LenisProviderProps = Readonly<{
  children: ReactNode;
}>;

function ExperienceScrollBridge() {
  useLenis((lenis: Lenis) => {
    experienceDirector.updateFromScroll({
      direction: lenis.direction as TimelineDirection,
      progress: lenis.progress,
      velocity: lenis.velocity,
    });
  });

  return null;
}

export function LenisProvider({ children }: LenisProviderProps) {
  return (
    <ReactLenis
      options={{
        autoRaf: true,
        smoothWheel: true,
        syncTouch: false,
      }}
      root
    >
      <ExperienceScrollBridge />
      {children}
    </ReactLenis>
  );
}
