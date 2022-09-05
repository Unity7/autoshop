import { DragControls } from "three/examples/jsm/controls/DragControls";
import { extend, useThree } from "@react-three/fiber";
import { useState, useEffect, useRef } from "react";

extend({ DragControls });

const Dragable = (props) => {
  const groupRef = useRef();
  const controlsRef = useRef();
  const [children, setChildren] = useState([]);
  const { camera, scene, gl } = useThree();
  useEffect(() => {
    setChildren(groupRef.current.children);
  }, []);

  useEffect(() => {
    controlsRef.current.addEventListener("hoveron", (e) => {
      scene.orbitControls.enabled = false;
    });

    controlsRef.current.addEventListener("hoveroff", (e) => {
      scene.orbitControls.enabled = true;
    });

    controlsRef.current.addEventListener("dragstart", (e) => {
      e.object.api?.mass.set(0);
    });

    controlsRef.current.addEventListener("dragend", (e) => {
      e.object.api?.mass.set(1);
    });

    controlsRef.current.addEventListener("drag", (e) => {
      e.object.api?.position.copy(e.object.position);
      e.object.api?.velocity.set(0, 0, 0);
    });
  }, [children]);

  return (
    <group ref={groupRef}>
      <dragControls
        transformGroup={props.transformGroup}
        ref={controlsRef}
        args={[children, camera, gl.domElement]}
      />
      {props.children}
    </group>
  );
};

export default Dragable;
