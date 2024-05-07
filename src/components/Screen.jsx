import React from "react";
import { useGLTF, useTexture, Decal } from "@react-three/drei";
import { useControls } from "leva";

export function Screen() {
  const { nodes, materials } = useGLTF("models/deskroom_no_merge.glb");

  const screenShot = useTexture("models/screen.png");

  //   const { position } = useControls({
  //     position: {
  //       value: { x: 2.35, y: 2.86, z: -1.94 },
  //       step: 0.001,
  //     },
  //   });

  return (
    <>
      <group position={[2.35, 2.86, -1.94]} rotation={[0.5, -0.75, 0]}>
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={materials["Black plastic"]}
        />
        <mesh geometry={nodes.Cylinder_1.geometry} map={screenShot}>
          <Decal
            // Debug
            position={[0.575, 0.52, 0]}
            rotation={[0, 0, 0]}
            scale={[1.74, 0.99, 1]}
          >
            <meshBasicMaterial
              map={screenShot}
              polygonOffset
              polygonOffsetFactor={-1} // The material should take precedence over the original
            />
          </Decal>
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("models/deskroom_no_merge.glb");
