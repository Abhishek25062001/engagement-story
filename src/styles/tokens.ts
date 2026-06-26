export const colors = {
  background: "var(--color-background)",
  foreground: "var(--color-foreground)",
  foregroundSoft: "var(--color-foreground-soft)",
  surface: "var(--color-surface)",
  surfaceMuted: "var(--color-surface-muted)",
  surfaceRaised: "var(--color-surface-raised)",
  border: "var(--color-border)",
  borderStrong: "var(--color-border-strong)",
  accent: "var(--color-accent)",
  accentHover: "var(--color-accent-hover)",
  accentSoft: "var(--color-accent-soft)",
  accentForeground: "var(--color-accent-foreground)",
  gold: "var(--color-gold)",
  goldSoft: "var(--color-gold-soft)",
  muted: "var(--color-muted)",
  disabled: "var(--color-disabled)",
  focus: "var(--color-focus)",
} as const;

export const typography = {
  families: {
    body: "var(--font-body)",
    display: "var(--font-display)",
    mono: "var(--font-mono)",
  },
  sizes: {
    caption: "var(--font-size-caption)",
    label: "var(--font-size-label)",
    body: "var(--font-size-body)",
    title: "var(--font-size-title)",
    subheading: "var(--font-size-subheading)",
    heading: "var(--font-size-heading)",
    display: "var(--font-size-display)",
  },
  weights: {
    regular: "var(--font-weight-regular)",
    medium: "var(--font-weight-medium)",
    semibold: "var(--font-weight-semibold)",
    bold: "var(--font-weight-bold)",
  },
  lineHeights: {
    tight: "var(--line-height-tight)",
    snug: "var(--line-height-snug)",
    normal: "var(--line-height-normal)",
    relaxed: "var(--line-height-relaxed)",
  },
  letterSpacing: {
    normal: "var(--letter-spacing-normal)",
    wide: "var(--letter-spacing-wide)",
    wider: "var(--letter-spacing-wider)",
  },
} as const;

export const spacing = {
  0: "var(--space-0)",
  1: "var(--space-1)",
  2: "var(--space-2)",
  3: "var(--space-3)",
  4: "var(--space-4)",
  5: "var(--space-5)",
  6: "var(--space-6)",
  8: "var(--space-8)",
  10: "var(--space-10)",
  12: "var(--space-12)",
  16: "var(--space-16)",
  20: "var(--space-20)",
  24: "var(--space-24)",
  section: "var(--space-section)",
} as const;

export const radius = {
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  xl: "var(--radius-xl)",
  full: "var(--radius-full)",
} as const;

export const elevation = {
  flat: "var(--elevation-flat)",
  low: "var(--elevation-low)",
  mid: "var(--elevation-mid)",
  high: "var(--elevation-high)",
} as const;

export const shadows = {
  none: "var(--shadow-none)",
  soft: "var(--shadow-soft)",
  raised: "var(--shadow-raised)",
  inset: "var(--shadow-inset)",
} as const;

export const blur = {
  none: "var(--blur-none)",
  sm: "var(--blur-sm)",
  md: "var(--blur-md)",
  lg: "var(--blur-lg)",
} as const;

export const motion = {
  durations: {
    fast: "var(--motion-duration-fast)",
    base: "var(--motion-duration-base)",
    slow: "var(--motion-duration-slow)",
  },
  easing: {
    standard: "var(--motion-ease-standard)",
    emphasized: "var(--motion-ease-emphasized)",
    out: "var(--motion-ease-out)",
  },
} as const;

export const breakpoints = {
  sm: "var(--breakpoint-sm)",
  md: "var(--breakpoint-md)",
  lg: "var(--breakpoint-lg)",
  xl: "var(--breakpoint-xl)",
} as const;

export const zIndex = {
  base: "var(--z-base)",
  raised: "var(--z-raised)",
  sticky: "var(--z-sticky)",
  overlay: "var(--z-overlay)",
  modal: "var(--z-modal)",
  toast: "var(--z-toast)",
} as const;

export const containers = {
  sm: "var(--container-sm)",
  md: "var(--container-md)",
  lg: "var(--container-lg)",
  xl: "var(--container-xl)",
  max: "var(--container-max)",
} as const;
