import "./Sphera.scss";
import { Suspense } from "react"; // Removed useState as it's no longer needed
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Earth from "../Earth/Earth";

function Sphera() {
  return (
    <div>
      <div id="sphera" className="quiz">
        <Canvas>
          <ambientLight intensity={2} />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            enableDamping={true}
            dampingFactor={0.05}
            target={[0, 0, 0]}
          />
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </div>
    </div>
  );
}

export default Sphera;
