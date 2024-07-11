import "./Sphera.scss";
import { useState, Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Earth from "../Earth/Earth";

function Sphera() {
  // Step 1: Define state for rotation
  const [axisRotation, setAxisRotation] = useState([0, 0, 0]);

  // Step 2: Update state on click
  const handleEarthClick = () => {
    setAxisRotation((prevRotation) => [
      prevRotation[0],
      prevRotation[1] + Math.PI / 2,
      prevRotation[2],
    ]);
  };
  return (
    <div>
      <div id="sphera" className="quiz" onClick={handleEarthClick}>
        {" "}
        {/* Step 2: Attach onClick handler */}
        <Canvas>
          <ambientLight intensity={2} />
          <OrbitControls
            enableZoom={false}
            enableDamping={true}
            dampingFactor={0.05}
            target={[0, 0, 0]}
          />
          <Suspense fallback={null}>
            {/* <RotatingAxis> */}
            {/* {" "}
                Step 3: Apply Rotation */}
            <Earth />
            {/* </RotatingAxis> */}
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </div>
    </div>
  );
}

export default Sphera;
