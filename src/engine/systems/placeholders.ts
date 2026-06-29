import type {
  RuntimeSystem,
  RuntimeSystemUpdate,
} from "@/engine/systems/RuntimeSystem";

class PlaceholderSystem implements RuntimeSystem {
  constructor(readonly id: string) {}

  update(state: RuntimeSystemUpdate) {
    void state;
  }
}

export class LightingSystem extends PlaceholderSystem {
  constructor() {
    super("lighting");
  }
}

export class EffectsSystem extends PlaceholderSystem {
  constructor() {
    super("effects");
  }
}

export class AudioSystem extends PlaceholderSystem {
  constructor() {
    super("audio");
  }
}
