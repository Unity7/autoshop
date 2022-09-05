import { Suspense } from "react";
import BoundingBox from "./BoundingBox";
import Model from "./Model";
import Dragable from "./Dragable";

const Cars = ({}) => {
  return (
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
  );
};

export default Cars;
