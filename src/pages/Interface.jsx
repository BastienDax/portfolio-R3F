import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import {
  Environment,
  Html,
  DeviceOrientationControls,
  FaceControls,
  FaceLandmarker,
  PerspectiveCamera,
} from "@react-three/drei";
import { Player } from "../components/Player";
import { SideMenu } from "../components/SideMenu";
import { SpatialUIMenu } from "../components/SpatialUIMenu";

export default function Interface() {
  function Camera() {
    const ref = useRef();

    return (
      <PerspectiveCamera
        ref={ref}
        makeDefault
        near={0.1}
        far={2000}
        fov={90}
        rotation={[0, 4.5, 0]}
      />
    );
  }

  const face = useRef();

  return (
    <Canvas>
      <FaceLandmarker>
        <Environment files="models/photostudio.hdr" background />

        <FaceControls ref={face} offsetScalar={15} />

        <group position={[0, 0, -25]}>
          <Html transform>
            <SpatialUIMenu />
          </Html>
          <Html transform position={[0, -10.5, 5]}>
            <Player />
          </Html>
          <Html transform position={[-17, 0, 10]}>
            <SideMenu />
          </Html>
        </group>

        <DeviceOrientationControls />
      </FaceLandmarker>
    </Canvas>
  );
}
