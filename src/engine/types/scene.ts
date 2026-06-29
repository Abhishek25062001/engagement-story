export type SceneLifecycle = "idle" | "entered" | "left";

export type ExperienceScene = {
  enabled: boolean;
  end: number;
  enter: () => void;
  id: string;
  leave: () => void;
  priority: number;
  start: number;
  update: (progress: number) => void;
};

export type SceneUpdate = Readonly<{
  globalProgress: number;
  sceneProgress: number;
}>;
