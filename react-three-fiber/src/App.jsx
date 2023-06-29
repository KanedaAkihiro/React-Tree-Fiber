import {
  Float,
  OrbitControls,
  PresentationControls,
  Text,
  useGLTF,
} from "@react-three/drei";
import "./App.css";
import { Canvas } from "react-three-fiber";

function App() {
  // Copy direct linkのインポート方法
  const macbook = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  const coffee = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup-tea/model.gltf"
  );

  // Down Load Modelでのインポート方法
  const donut = useGLTF("./donut.gltf");

  return (
    <div>
      <Canvas camera={{ fov: 45, near: 0.1, far: 2000 }}>
        <color args={["#155196"]} attach="background" />
        {/* ジオメトリを立体的に稼働させるライブラリ */}
        {/* <OrbitControls /> */}
        {/* ジオメトリの明細工場 */}
        <ambientLight />
        {/* オブジェクト全体の明るさ向上 */}
        <directionalLight intensity={1.4} />
        {/* <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh> */}

        <PresentationControls
          global
          config={{ mass: 2, tenstion: 400 }}
          snap={{ mass: 4, tenstion: 300 }}
        >
          {/* PCオブジェクト */}
          <Float rocationIndensity={1.6}>
            <rectAreaLight
              color={"#0021a7"}
              intensity={55}
              rotation={[0.1, Math.PI, 0]}
              width={2.0}
              height={1.65}
              // 左数値＝オブジェクトの横位置(X)・真ん中数値=高さ(Y)・右数値=奥行(Z)
              position={[0, 0, -1]}
            />
            <primitive object={macbook.scene} position={[0, -1, 0]}></primitive>
          </Float>
          {/* Coffeeオブジェクト */}
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
          {/* Donutオブジェクト */}
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
              object={donut.scene}
              position={[3, -1, 0]}
              scale={[3, 3, 3]}
              // オブジェクトを傾けるプロパティ
              rotation-x={0.4}
            ></primitive>
          </Float>

          <Text
            font="/Pacifico-Regular.ttf"
            fontSize={0.5}
            position={[0, 1.125, 0.75]}
          >
            Hello React-three-fiber
          </Text>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default App;
