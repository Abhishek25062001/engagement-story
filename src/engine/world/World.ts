import { Camera } from "@/engine/camera/Camera";
import { SceneGraph } from "@/engine/scene/SceneGraph";
import {
  AudioSystem,
  EffectsSystem,
  LightingSystem,
} from "@/engine/systems/placeholders";
import { Timeline } from "@/engine/timeline/Timeline";

export class World {
  readonly audio = new AudioSystem();
  readonly camera = new Camera();
  readonly effects = new EffectsSystem();
  readonly lighting = new LightingSystem();
  readonly sceneGraph = new SceneGraph();
  readonly timeline = new Timeline();

  get futureSystems() {
    return [this.lighting, this.effects, this.audio] as const;
  }

  reset() {
    this.timeline.reset();
    this.camera.reset();
    this.sceneGraph.clear();
  }
}
