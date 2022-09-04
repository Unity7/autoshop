import { useThree, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo } from "react";

const Background = (props) => {
  const texture = useLoader(THREE.TextureLoader, "/autoshop.jpg");

  const { gl } = useThree();

  const formatted = new THREE.WebGLCubeRenderTarget(
    texture.image.height
  ).fromEquirectangularTexture(gl, texture);

  return <primitive attach="background" object={formatted.texture} />;
};

export default Background;
