import { setupGsap } from "@/lib/animation/gsap";
import { motionScrub } from "@/lib/animation/motionTokens";
import { prefersReducedMotion } from "@/lib/animation/reducedMotion";

type TimelineOptions = Readonly<{
  defaults?: gsap.TweenVars;
  scrollTrigger?: ScrollTrigger.Vars;
}>;

type PinOptions = Readonly<{
  anticipatePin?: number;
  end?: string;
  pinSpacing?: boolean;
  scrub?: boolean | number;
  start?: string;
  trigger: gsap.DOMTarget;
}>;

type MatchMediaAnimation = Readonly<{
  conditions: Record<string, string>;
  setup: (context: gsap.Context) => void;
}>;

export function createScrollTimeline(options: TimelineOptions = {}) {
  const { gsap } = setupGsap();

  return gsap.timeline(options);
}

export function createPin({
  anticipatePin = 1,
  end = "+=100%",
  pinSpacing = true,
  scrub = motionScrub.cinematic,
  start = "top top",
  trigger,
}: PinOptions): ScrollTrigger | null {
  if (prefersReducedMotion()) {
    return null;
  }

  const { ScrollTrigger } = setupGsap();

  return ScrollTrigger.create({
    anticipatePin,
    end,
    pin: true,
    pinSpacing,
    scrub,
    start,
    trigger,
  });
}

export function createMatchMediaAnimation({
  conditions,
  setup,
}: MatchMediaAnimation) {
  if (prefersReducedMotion()) {
    return null;
  }

  const { gsap } = setupGsap();
  const media = gsap.matchMedia();

  media.add(conditions, (context) => {
    setup(context);
  });

  return media;
}

export function refreshScroll() {
  const { ScrollTrigger } = setupGsap();
  ScrollTrigger.refresh();
}

export function killScrollTriggers(scope?: Element) {
  const { ScrollTrigger } = setupGsap();

  ScrollTrigger.getAll().forEach((trigger) => {
    const triggerElement = trigger.trigger;

    if (!scope || (triggerElement && scope.contains(triggerElement))) {
      trigger.kill();
    }
  });
}

export function cleanupScrollContext(context: gsap.Context | null) {
  context?.revert();
}

export function scopedAnimation(
  scope: Element | string | object,
  animation: gsap.ContextFunc,
): gsap.Context | null {
  if (prefersReducedMotion()) {
    return null;
  }

  const { gsap } = setupGsap();

  return gsap.context(animation, scope);
}
