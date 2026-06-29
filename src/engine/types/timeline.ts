export type TimelineDirection = -1 | 0 | 1;

export type TimelineState = Readonly<{
  direction: TimelineDirection;
  progress: number;
  velocity: number;
}>;

export type TimelineUpdate = Partial<TimelineState>;
