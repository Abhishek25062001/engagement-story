import type { CameraState } from "@/engine/types/camera";
import type { TimelineState } from "@/engine/types/timeline";

export type SceneEventPayload = Readonly<{
  id: string;
  progress: number;
}>;

export type ExperienceEventMap = {
  "camera:update": CameraState;
  "director:update": TimelineState;
  "scene:enter": SceneEventPayload;
  "scene:leave": SceneEventPayload;
  "timeline:update": TimelineState;
};

export type ExperienceEventName = keyof ExperienceEventMap;

export type ExperienceEventHandler<EventName extends ExperienceEventName> = (
  payload: ExperienceEventMap[EventName],
) => void;
