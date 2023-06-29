import {
  Float,
  OrbitControls,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";
import "./App.css";
import { Canvas } from "react-three-fiber";

function App() {
  const macbook = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  const coffee = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup-tea/model.gltf"
  );

  return (
    <div>
      <Canvas camera={{ fov: 45, near: 0.1, far: 2000 }}>
        <color args={["#155196"]} attach="background" />
        {/* ジオメトリを立体的に稼働させるライブラリ */}
        {/* <OrbitControls /> */}
        {/* ジオメトリの明細工場 */}
        <ambientLight />
        {/* <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh> */}

        <PresentationControls
          global
          config={{ mass: 2, tenstion: 400 }}
          snap={{ mass: 4, tenstion: 300 }}
        >
          <Float rocationIndensity={1.6}>
            <rectAreaLight
              color={"#0021a7"}
              intensity={55}
              rotation={[0.1, Math.PI, 0]}
              width={2.0}
              height={1.65}
              position={[0, 0, -1]}
            />
            <primitive object={macbook.scene} position={[0, -1, 0]}></primitive>
          </Float>
          <Float rocationIndensity={1.6}>
            <rectAreaLight
              color={"#0021a7"}
              intensity={55}
              rotation={[0.1, Math.PI, 0]}
              width={2.0}
              height={1.65}
              position={[0, 0, -1]}
            />
            <primitive
              object={coffee.scene}
              position={[-2.4, -1.3, 0.2]}
              scale={[2, 2, 2]}
            ></primitive>
          </Float>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default App;
