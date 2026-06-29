import type { EventBus } from "@/engine/events/EventBus";
import type { ExperienceScene } from "@/engine/types/scene";

type SceneRuntimeState = Readonly<{
  isActive: boolean;
  scene: ExperienceScene;
}>;

const clampSceneProgress = (value: number) => Math.min(1, Math.max(0, value));

const sortScenes = (scenes: SceneRuntimeState[]) =>
  scenes.sort((first, second) => first.scene.priority - second.scene.priority);

export class SceneGraph {
  private scenes = new Map<string, SceneRuntimeState>();

  getAll() {
    return sortScenes(Array.from(this.scenes.values())).map(
      ({ scene }) => scene,
    );
  }

  register(scene: ExperienceScene) {
    this.scenes.set(scene.id, {
      isActive: false,
      scene,
    });

    return () => {
      this.unregister(scene.id);
    };
  }

  unregister(id: string) {
    this.scenes.delete(id);
  }

  update(globalProgress: number, events: EventBus) {
    sortScenes(Array.from(this.scenes.values())).forEach((runtimeScene) => {
      const { scene } = runtimeScene;
      const isWithinScene =
        scene.enabled &&
        globalProgress >= scene.start &&
        globalProgress <= scene.end;

      if (!isWithinScene) {
        if (runtimeScene.isActive) {
          scene.leave();
          this.scenes.set(scene.id, {
            isActive: false,
            scene,
          });
          events.emit("scene:leave", {
            id: scene.id,
            progress: globalProgress,
          });
        }

        return;
      }

      if (!runtimeScene.isActive) {
        scene.enter();
        this.scenes.set(scene.id, {
          isActive: true,
          scene,
        });
        events.emit("scene:enter", {
          id: scene.id,
          progress: globalProgress,
        });
      }

      const range = scene.end - scene.start;
      const sceneProgress =
        range <= 0 ? 1 : (globalProgress - scene.start) / range;

      scene.update(clampSceneProgress(sceneProgress));
    });
  }

  clear() {
    this.scenes.clear();
  }
}
