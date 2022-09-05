import { useFrame } from "@react-three/fiber";
import state from "../state";
import * as THREE from "three";

const CamControls = () => {
  useFrame(({ camera, scene }) => {
    if (state.activeMesh.name !== state.activeMeshName) {
      state.activeMesh = scene.getObjectByName(state.activeMeshName) || {};
    }

    //Lerp takes 1 vector target you want to interpolated towards and how far along new vector you want to interpolate. 2nd vector the alpha between 0 and 1.
    if (state.shouldUpdate) {
      camera.position.lerp(state.cameraPos, 0.1);
      scene.orbitControls.target.lerp(state.target, 0.1);
      scene.orbitControls.update();

      const diff = camera.position.clone().sub(state.cameraPos).length();
      if (diff < 0.1) state.shouldUpdate = false;
    }
  });
  return null;
};

export default CamControls;
