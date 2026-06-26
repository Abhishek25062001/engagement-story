import { setupGsap } from "@/lib/animation/gsap";
import { prefersReducedMotion } from "@/lib/animation/reducedMotion";

type AnimationContextOptions = Readonly<{
  scope: Element | string | object;
  skipReducedMotion?: boolean;
}>;

export function createAnimationContext(
  animation: gsap.ContextFunc,
  { scope, skipReducedMotion = true }: AnimationContextOptions,
): gsap.Context | null {
  if (skipReducedMotion && prefersReducedMotion()) {
    return null;
  }

  const { gsap } = setupGsap();

  return gsap.context(animation, scope);
}

export function cleanupAnimationContext(context: gsap.Context | null) {
  context?.revert();
}
