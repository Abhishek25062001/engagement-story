import type {
  TimelineDirection,
  TimelineState,
  TimelineUpdate,
} from "@/engine/types/timeline";

const clampProgress = (value: number) => Math.min(1, Math.max(0, value));

const defaultTimelineState: TimelineState = {
  direction: 0,
  progress: 0,
  velocity: 0,
};

export class Timeline {
  private state: TimelineState = defaultTimelineState;

  get direction(): TimelineDirection {
    return this.state.direction;
  }

  get progress() {
    return this.state.progress;
  }

  get velocity() {
    return this.state.velocity;
  }

  getState(): TimelineState {
    return this.state;
  }

  update(update: TimelineUpdate) {
    this.state = {
      direction: update.direction ?? this.state.direction,
      progress:
        update.progress === undefined
          ? this.state.progress
          : clampProgress(update.progress),
      velocity: update.velocity ?? this.state.velocity,
    };
  }

  reset() {
    this.state = defaultTimelineState;
  }
}
