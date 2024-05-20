import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { Screen } from "./Screen";

export function Deskroom() {
  const { nodes } = useGLTF("models/deskroom.glb");

  const texture = useTexture("models/deskroom_texture.webp");

  const { viewport } = useThree();

  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  const isMobile = window.innerWidth < 400;
  const responsiveRatio = viewport.width / 12;

  return (
    <>
      <mesh
        scale={isMobile ? responsiveRatio : 1}
        rotation={[0.5, -0.75, 0]}
        geometry={nodes.baked.geometry}
      >
        <meshBasicMaterial map={texture} />
      </mesh>

      <Screen />
    </>
  );
}

useGLTF.preload("models/deskroom.glb");
