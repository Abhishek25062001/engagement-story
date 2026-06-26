import {
  motionDelays,
  motionDistances,
  motionDurations,
  motionEases,
  motionScales,
} from "@/lib/animation/motionTokens";

type PresetOptions = Readonly<{
  delay?: number;
  duration?: number;
}>;

export function fadeIn(options: PresetOptions = {}): gsap.TweenVars {
  return {
    autoAlpha: 1,
    delay: options.delay,
    duration: options.duration ?? motionDurations.base,
    ease: motionEases.standard,
  };
}

export function fadeUp(options: PresetOptions = {}): gsap.TweenVars {
  return {
    autoAlpha: 1,
    delay: options.delay,
    duration: options.duration ?? motionDurations.slow,
    ease: motionEases.emphasized,
    y: 0,
  };
}

export function reveal(options: PresetOptions = {}): gsap.TweenVars {
  return {
    autoAlpha: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    delay: options.delay,
    duration: options.duration ?? motionDurations.slow,
    ease: motionEases.emphasized,
  };
}

export function scale(options: PresetOptions = {}): gsap.TweenVars {
  return {
    autoAlpha: 1,
    delay: options.delay,
    duration: options.duration ?? motionDurations.base,
    ease: motionEases.standard,
    scale: motionScales.base,
  };
}

export function parallax(distance = motionDistances.lg): gsap.TweenVars {
  return {
    ease: motionEases.none,
    y: distance * -1,
  };
}

export function stagger(amount = motionDelays.short) {
  return {
    each: amount,
  };
}

export function sectionTransition(options: PresetOptions = {}): gsap.TweenVars {
  return {
    autoAlpha: 1,
    delay: options.delay,
    duration: options.duration ?? motionDurations.slower,
    ease: motionEases.softInOut,
    y: 0,
  };
}

export const initialStates = {
  fade: { autoAlpha: 0 },
  fadeUp: { autoAlpha: 0, y: motionDistances.md },
  reveal: { autoAlpha: 1, clipPath: "inset(0% 0% 100% 0%)" },
  scale: { autoAlpha: 0, scale: motionScales.hidden },
} as const satisfies Record<string, gsap.TweenVars>;
