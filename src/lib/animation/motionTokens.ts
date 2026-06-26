export const motionDurations = {
  instant: 0,
  fast: 0.28,
  base: 0.48,
  slow: 0.8,
  slower: 1.15,
} as const;

export const motionDelays = {
  none: 0,
  short: 0.08,
  base: 0.16,
  long: 0.28,
} as const;

export const motionDistances = {
  none: 0,
  xs: 8,
  sm: 16,
  md: 28,
  lg: 48,
  xl: 72,
} as const;

export const motionScales = {
  hidden: 0.96,
  subtle: 0.985,
  base: 1,
  lifted: 1.025,
} as const;

export const motionEases = {
  none: "none",
  standard: "power2.out",
  emphasized: "power3.out",
  softInOut: "power2.inOut",
} as const;

export const motionScrub = {
  immediate: true,
  soft: 0.8,
  cinematic: 1.4,
} as const;
