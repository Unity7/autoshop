import "./App.css";
//useThree is used to allow OrbitControls to use the react-three-fiber elements
//extend is used to allow OrbitControls to be used in JSX
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";

import * as THREE from "three";

//Hook to give access to an element
import { Suspense } from "react";
import { useEffect } from "react";
import { Physics } from "@react-three/cannon";
import Orbit from "./components/Orbit";
import Background from "./components/Background";
import Floor from "./components/Floor";
import Bulb from "./components/Bulb";
import ColorPicker from "./components/ColorPicker";
import Cars from "./components/Cars";
import CamControls from "./components/CamControls";
import CameraButtons from "./components/CameraButtons";
import Lights from "./components/Lights";
import Effects from "./components/Effects";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  GodRays,
} from "@react-three/postprocessing";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker />
      <CameraButtons />
      <Canvas
        shadows
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
      >
        <CamControls />
        {/* <fog attach="fog" args={["white", 1, 10]} /> */}
        <Lights />
        <Orbit attach="orbitControls" />
        {/* <axesHelper args={[5]} /> */}
        <Background />
        <Physics>
          <Cars />
          <Suspense fallback={null}></Suspense>
          <Floor position={[0, -0.5, 0]} />
        </Physics>
        <EffectComposer>
          <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default App;
