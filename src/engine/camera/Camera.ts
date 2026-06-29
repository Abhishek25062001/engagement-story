import type { CameraState } from "@/engine/types/camera";

export const defaultCameraState: CameraState = {
  focus: 0,
  positionX: 0,
  positionY: 0,
  rotation: 0,
  tilt: 0,
  zoom: 1,
};

export class Camera {
  private state: CameraState = defaultCameraState;

  get focus() {
    return this.state.focus;
  }

  get positionX() {
    return this.state.positionX;
  }

  get positionY() {
    return this.state.positionY;
  }

  get rotation() {
    return this.state.rotation;
  }

  get tilt() {
    return this.state.tilt;
  }

  get zoom() {
    return this.state.zoom;
  }

  getState(): CameraState {
    return this.state;
  }

  setState(state: Partial<CameraState>) {
    this.state = {
      ...this.state,
      ...state,
    };
  }

  update() {
    return this.state;
  }

  reset() {
    this.state = defaultCameraState;
  }
}
