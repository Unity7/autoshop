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
import Box from "./components/Box";
import Background from "./components/Background";
import Floor from "./components/Floor";
import Bulb from "./components/Bulb";
import ColorPicker from "./components/ColorPicker";
import Dragable from "./components/Dragable";
import Model from "./components/Model";
import BoundingBox from "./components/BoundingBox";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker />
      <Canvas
        shadows
        style={{ background: "black" }}
        camera={{ position: [3, 3, 3] }}
      >
        {/* <fog attach="fog" args={["white", 1, 10]} /> */}
        <ambientLight intensity={0.2} />

        <Orbit attach="orbitControls" />
        <axesHelper args={[5]} />
        <Bulb position={[0, 3, 0]} />
        <Physics>
          <Suspense fallback={null}>
            {/* transformGroup enables single draggable group object (each model must be wrapped in <Draggable>*/}
            <Dragable transformGroup>
              <BoundingBox
                visible
                position={[4, 4, 0]}
                dims={[3, 2, 6]}
                offset={[0, -0.4, 0.8]}
              >
                <Model
                  path="/tesla_model_3/scene.gltf"
                  scale={new Array(3).fill(0.01)}
                  // position={[4, 2, 0]}
                />
              </BoundingBox>
            </Dragable>
            <Dragable transformGroup>
              <BoundingBox
                visible
                position={[-4, 4, 0]}
                dims={[3, 2, 6]}
                offset={[0, -0.8, 0.2]}
              >
                <Model
                  path="/tesla_model_s/scene.gltf"
                  scale={new Array(3).fill(0.012)}
                  // position={[-4, 2, 0]}
                />
              </BoundingBox>
            </Dragable>
          </Suspense>
          <Suspense fallback={null}>
            <Background />
          </Suspense>
          <Floor position={[0, -0.5, 0]} />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
