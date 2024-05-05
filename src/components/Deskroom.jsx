import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

export function Deskroom() {
  const { nodes } = useGLTF("models/deskroom.glb");

  const texture = useTexture("models/deskroom_texture.webp");

  const { viewport } = useThree();

  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 12;

  return (
    <mesh
      scale={isMobile ? responsiveRatio : 1}
      geometry={nodes.baked.geometry}
    >
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

useGLTF.preload("models/deskroom.glb");
