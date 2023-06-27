import { OrbitControls, useGLTF } from "@react-three/drei";
import './App.css'
import { Canvas } from "react-three-fiber"

function App() {

  const macbook = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <div>
      <Canvas camera={{fov: 45, near:0.1, far: 2000}}>
        <color args={["#155196"]} attach="background" />
        {/* ジオメトリを立体的に稼働させるライブラリ */}
        <OrbitControls />
        {/* ジオメトリの明細工場 */}
        <ambientLight />
        {/* <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh> */}
        <primitive object={macbook.scene} position={[0,-1,0]}></primitive>
      </Canvas>
    </div>
  );
}

export default App
