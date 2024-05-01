import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas flat shadows camera={{ position: [9, 9, 9], fov: 60 }}>
      <color attach="background" args={["#688CAE"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
