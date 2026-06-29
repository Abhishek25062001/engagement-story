"use client";

import { useSyncExternalStore } from "react";
import { experienceDirector } from "@/engine/director/ExperienceDirector";

export function useExperienceDirector() {
  const timeline = useSyncExternalStore(
    (onStoreChange) => experienceDirector.subscribe(onStoreChange),
    () => experienceDirector.timeline.getState(),
    () => experienceDirector.timeline.getState(),
  );

  return {
    camera: experienceDirector.camera,
    director: experienceDirector,
    sceneGraph: experienceDirector.sceneGraph,
    scenes: experienceDirector.sceneGraph,
    timeline,
    world: experienceDirector.world,
  };
}
