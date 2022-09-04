import "./App.css";
//useThree is used to allow OrbitControls to use the react-three-fiber elements
//extend is used to allow OrbitControls to be used in JSX
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//Hook to give access to an element
import { useRef } from "react";
import { useEffect } from "react";

extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;

  //camera and gl props are passed into OrbitControls
  // return <OrbitControls args={[camera, gl.domElement]} />;
};

const Box = (props) => {
  //Using useRef to gain reference to the react-three-fiber element (3D Object)
  const ref = useRef();

  //useFrame takes a call back that runs on every render
  useFrame((state) => {
    //current gives access to the referenced object
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref} {...props} castShadow receiveShadow>
      <boxBufferGeometry />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
};

const Floor = (props) => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial />
    </mesh>
  );
};

const Bulb = (props) => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 20, 20]} />

      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        shadows
        style={{ background: "black" }}
        camera={{ position: [3, 3, 3] }}
      >
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <Orbit />
        <axesHelper args={[5]} />
        <Floor position={[0, -0.5, 0]} />
        <Box position={[2, 1, 2]} />
      </Canvas>
    </div>
  );
}

export default App;
