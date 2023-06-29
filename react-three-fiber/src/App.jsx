import {
  ContactShadows,
  Float,
  Html,
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
      <Canvas camera={{ fov: 45, near: 0.1, far: 2000, position: [0, 1.5, 6] }}>
        <color args={["red"]} attach="background" />
        {/* ジオメトリの明細向上 */}
        <ambientLight />
        {/* オブジェクト全体の明るさ向上 */}
        <directionalLight intensity={1.4} />

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
            <primitive object={macbook.scene} position={[0, -1, 0]}>
              {/* iframe ＝ 外部サイトのHPなどをオブジェクトに表示させるタグ */}
              <Html
                position={[0, 1.56, -1.4]}
                distanceFactor={1.17}
                rotation-x={-0.256}
                transform
                wrapperClass="htmlScreen"
              >
                <iframe
                  src="http://abehiroshi.la.coocan.jp/"
                  frameborder="0"
                ></iframe>
              </Html>
            </primitive>
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
            position={[0, 2, 0.75]}
          >
            Study-React
          </Text>
        </PresentationControls>
        <ContactShadows scale={7} blur={2.4} opacity={0.7} position-y={-2.0} />
      </Canvas>
    </div>
  );
}

export default App;
