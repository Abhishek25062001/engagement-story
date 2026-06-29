import { EventBus } from "@/engine/events/EventBus";
import { World } from "@/engine/world/World";
import type { CameraState } from "@/engine/types/camera";
import type {
  ExperienceEventHandler,
  ExperienceEventName,
} from "@/engine/types/events";
import type { ExperienceScene } from "@/engine/types/scene";
import type { TimelineDirection, TimelineState } from "@/engine/types/timeline";

export type DirectorScrollUpdate = Readonly<{
  direction: TimelineDirection;
  progress: number;
  velocity: number;
}>;

type DirectorSubscriber = (timeline: TimelineState) => void;

declare global {
  interface Window {
    __EXPERIENCE_DEBUG__?: ExperienceDebugState;
  }
}

export type ExperienceDebugState = Readonly<{
  camera: CameraState;
  direction: TimelineDirection;
  progress: number;
  registeredScenes: string[];
  velocity: number;
}>;

export class ExperienceDirector {
  readonly events = new EventBus();
  readonly world = new World();

  private subscribers = new Set<DirectorSubscriber>();

  get camera() {
    return this.world.camera;
  }

  get scenes() {
    return this.world.sceneGraph;
  }

  get sceneGraph() {
    return this.world.sceneGraph;
  }

  get timeline() {
    return this.world.timeline;
  }

  registerScene(scene: ExperienceScene) {
    return this.world.sceneGraph.register(scene);
  }

  subscribe(subscriber: DirectorSubscriber) {
    this.subscribers.add(subscriber);

    return () => {
      this.subscribers.delete(subscriber);
    };
  }

  updateFromScroll(update: DirectorScrollUpdate) {
    this.update(update);
  }

  update(update: DirectorScrollUpdate) {
    this.world.timeline.update(update);
    this.events.emit("timeline:update", this.world.timeline.getState());

    const cameraState = this.world.camera.update();
    this.events.emit("camera:update", cameraState);

    this.world.sceneGraph.update(this.world.timeline.progress, this.events);
    this.updateFutureSystems();
    this.updateDebugState();
    this.notify();

    this.events.emit("director:update", this.world.timeline.getState());
  }

  reset() {
    this.world.reset();
    this.updateDebugState();
    this.notify();
  }

  on<EventName extends ExperienceEventName>(
    eventName: EventName,
    handler: ExperienceEventHandler<EventName>,
  ) {
    return this.events.on(eventName, handler);
  }

  private notify() {
    const timelineState = this.world.timeline.getState();

    this.subscribers.forEach((subscriber) => {
      subscriber(timelineState);
    });
  }

  private updateFutureSystems() {
    const runtimeState = {
      camera: this.world.camera.getState(),
      timeline: this.world.timeline.getState(),
    };

    this.world.futureSystems.forEach((system) => {
      system.update(runtimeState);
    });
  }

  private updateDebugState() {
    if (
      process.env.NODE_ENV === "production" ||
      typeof window === "undefined"
    ) {
      return;
    }

    const timeline = this.world.timeline.getState();

    window.__EXPERIENCE_DEBUG__ = {
      camera: this.world.camera.getState(),
      direction: timeline.direction,
      progress: timeline.progress,
      registeredScenes: this.world.sceneGraph.getAll().map((scene) => scene.id),
      velocity: timeline.velocity,
    };
  }
}

export const experienceDirector = new ExperienceDirector();
