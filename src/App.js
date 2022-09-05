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
import CameraControls from "./components/CameraControls";
import CamControls from "./components/CamControls";
import CameraButtons from "./components/CameraButtons";

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
        {/* <CameraControls /> */}
        <CamControls />
        {/* <fog attach="fog" args={["white", 1, 10]} /> */}
        <ambientLight intensity={0.2} />
        <directionalLight
          intensity={2}
          castShadow
          position={[6, 3, 0]}
          shadow-mapSize-height={2 ** 10}
          shadow-mapSize-width={2 ** 10}
          shadow-radius={10}
        />
        <Orbit attach="orbitControls" />
        <axesHelper args={[5]} />
        <Bulb position={[-6, 3, 0]} />
        <Bulb position={[0, 3, 0]} />
        <Bulb position={[6, 3, 0]} />
        <Background />
        <Physics>
          <Cars />
          <Suspense fallback={null}></Suspense>
          <Floor position={[0, -0.5, 0]} />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
