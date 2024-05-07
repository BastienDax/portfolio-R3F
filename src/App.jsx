import { Canvas, useFrame } from "@react-three/fiber";
import { Overlay } from "./components/Overlay";
import { ScrollControls, useScroll } from "@react-three/drei";
import { Deskroom } from "./components/Deskroom";
import { getProject, val } from "@theatre/core";
import {
  SheetProvider,
  PerspectiveCamera,
  OrthographicCamera,
  useCurrentSheet,
} from "@theatre/r3f";

import deskroomThroughState from "./deskroom.json";

function App() {
  const sheet = getProject("Portfolio", { state: deskroomThroughState }).sheet(
    "Scene"
  );

  return (
    <>
      <Canvas flat gl={{ preserveDrawingBuffer: true }}>
        <ScrollControls pages={4} damping={1} maxSpeed={1}>
          <SheetProvider sheet={sheet}>
            <Scene />
          </SheetProvider>
        </ScrollControls>
      </Canvas>

      <Overlay />
    </>
  );
}

export default App;

function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);

    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  return (
    <>
      <color attach="background" args={["#688CAE"]} />

      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 0]}
        fov={75}
        near={0.1}
        far={70}
      />

      <Deskroom />
    </>
  );
}
