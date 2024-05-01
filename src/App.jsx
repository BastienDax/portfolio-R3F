import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Overlay } from "./components/Overlay";
import { usePlay } from "./contexts/Play";

function App() {
  const { play } = usePlay();

  return (
    <div className="h-screen">
      <Canvas
        flat
        shadows
        camera={{ position: [9, 7, 9], fov: 50 }}
        style={{
          opacity: play ? 100 : 10,
        }}
      >
        <color attach="background" args={["#688CAE"]} />
        <Experience />
      </Canvas>

      <Overlay />
    </div>
  );
}

export default App;
