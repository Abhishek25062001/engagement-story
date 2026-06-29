import type { CameraState } from "@/engine/types/camera";
import type { TimelineState } from "@/engine/types/timeline";

export type RuntimeSystemUpdate = Readonly<{
  camera: CameraState;
  timeline: TimelineState;
}>;

export interface RuntimeSystem {
  id: string;
  update: (state: RuntimeSystemUpdate) => void;
}
