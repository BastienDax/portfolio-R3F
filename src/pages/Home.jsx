import { useEffect, useState, useRef } from "react";
import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Overlay } from "../components/Overlay";
import { ScrollControls, useScroll } from "@react-three/drei";
import { Deskroom } from "../components/Deskroom";
import { getProject, val } from "@theatre/core";
import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";
import deskroomThroughState from "../deskroom2.json";

import background from "/models/screen-bg-3.webp";

function Loading() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 50) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 50);

      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <div className="h-full w-full text-3xl flex justify-center items-center text-white">
      <img
        className="h-full w-full top-0 left-0 absolute blur-xl"
        src={background}
        alt="background"
      />
      <span className="z-10">{count * 2}%</span>
    </div>
  );
}

function Home() {
  const sheet = getProject("Portfolio", { state: deskroomThroughState }).sheet(
    "Scene"
  );

  const [animationComplete, setAnimationComplete] = useState(false);
  const navigationRef = useRef(null);

  useEffect(() => {
    if (animationComplete) {
      navigationRef.current.click();
    }
  }, [animationComplete]);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Canvas flat gl={{ preserveDrawingBuffer: true }}>
          <ScrollControls pages={3} damping={1} maxSpeed={1}>
            <SheetProvider sheet={sheet}>
              <Scene onAnimationComplete={handleAnimationComplete} />
            </SheetProvider>
          </ScrollControls>
        </Canvas>

        <a ref={navigationRef} href="./interface" style={{ display: "none" }} />

        <Overlay />
      </Suspense>
    </>
  );
}

export default Home;

function Scene({ onAnimationComplete }) {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);

    sheet.sequence.position = scroll.offset * sequenceLength;

    if (sheet.sequence.position >= sequenceLength - 1) {
      onAnimationComplete();
    }
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
