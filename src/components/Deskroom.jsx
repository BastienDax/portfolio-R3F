import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Deskroom() {
  const { nodes } = useGLTF("models/deskroom.glb");

  const texture = useTexture("models/deskroom_texture.webp");

  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  return (
    <mesh geometry={nodes.baked.geometry}>
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

useGLTF.preload("models/deskroom.glb");
