"use client";

import { useEffect } from "react";
import { motionScrub, setupGsap } from "@/lib/animation";

export function HeroOpeningInteraction() {
  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      return;
    }

    const { gsap } = setupGsap();

    const context = gsap.context(() => {
      const stage = hero.querySelector(".hero-stage");
      const cover = hero.querySelector(".hero-cover");
      const paper = hero.querySelector(".hero-cover-paper");
      const innerLayer = hero.querySelector(".hero-cover-inner-layer");
      const shadow = hero.querySelector(".hero-cover-shadow");
      const cue = hero.querySelector(".hero-open-cue");

      if (!stage || !cover || !paper || !innerLayer || !shadow || !cue) {
        return;
      }

      gsap.set(stage, {
        perspective: 1200,
        transformStyle: "preserve-3d",
      });

      gsap.set(cover, {
        transformStyle: "preserve-3d",
      });

      gsap.set(paper, {
        transformOrigin: "50% 8%",
        transformStyle: "preserve-3d",
        willChange: "transform",
      });

      gsap.set(innerLayer, {
        transformOrigin: "50% 50%",
        willChange: "transform",
      });

      gsap.set(shadow, {
        willChange: "transform, opacity, filter",
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=120%",
          scrub: motionScrub.cinematic,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(
          cue,
          {
            autoAlpha: 0,
            y: -12,
            duration: 0.18,
          },
          0,
        )
        .to(
          shadow,
          {
            scaleX: 1.18,
            scaleY: 1.28,
            y: 20,
            opacity: 0.88,
            filter: "blur(2rem)",
            duration: 0.36,
          },
          0.04,
        )
        .to(
          innerLayer,
          {
            y: 16,
            scale: 1.025,
            duration: 0.46,
          },
          0.08,
        )
        .to(
          paper,
          {
            y: -44,
            z: 44,
            rotateX: -4.5,
            rotateZ: -0.25,
            duration: 0.42,
          },
          0.08,
        )
        .to(
          paper,
          {
            y: -148,
            z: 92,
            rotateX: -10,
            rotateZ: -0.5,
            duration: 0.58,
          },
          0.42,
        )
        .to(
          cover,
          {
            y: -20,
            duration: 0.5,
          },
          0.5,
        );
    }, hero);

    return () => {
      context.revert();
    };
  }, []);

  return null;
}
