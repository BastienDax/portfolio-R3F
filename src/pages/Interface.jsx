import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import {
  Environment,
  Html,
  DeviceOrientationControls,
  FaceControls,
  FaceLandmarker,
  PerspectiveCamera,
  OrbitControls,
  Float,
} from "@react-three/drei";
import { SideMenu } from "../components/SideMenu";
import { Radio2 } from "../components/Radio2";
import { BottomMenu } from "../components/BottomMenu";
import { useState } from "react";
import FaceSVGAnimation from "../components/FaceSVGAnimation";
import { useEffect } from "react";

export default function Interface() {
  const [cameraAccepted, setCameraAccepted] = useState(null);

  const [choiceCamera, setChoiceCamera] = useState(false);

  const [tutorial, setTutorial] = useState(false);

  const face = useRef();

  const acceptCamera = () => {
    setCameraAccepted(true);
    setChoiceCamera(true);
  };

  const deniedCamera = () => {
    setCameraAccepted(false);
    setChoiceCamera(true);
  };

  const tutorialEnd = () => {
    setTutorial(true);
  };

  return (
    <Canvas>
      <FaceLandmarker>
        <Environment
          files="models/photostudio.hdr"
          background
          resolution={256}
        />

        {cameraAccepted ? (
          <FaceControls ref={face} offsetScalar={50} />
        ) : (
          <>
            <PerspectiveCamera makeDefault near={0.1} far={2000} fov={75} />

            <OrbitControls />
          </>
        )}

        {choiceCamera === false && (
          <Html center position={[2, 0, -25]}>
            <div className="w-screen h-screen flex justify-center">
              <div className="flex mt-96 flex-col justify-center items-center">
                <div className="flex justify-center gap-x-4">
                  <button className="contact" onClick={() => acceptCamera()}>
                    Accepter
                  </button>
                  <button className="contact" onClick={() => deniedCamera()}>
                    Refuser
                  </button>
                </div>
                <p className="mt-14 text-xl font-bold text-white">
                  Acceptez l’usage de la caméra pour avoir une meilleure
                  expérience.
                </p>
              </div>
            </div>
            <div className="absolute bottom-4 left-0 w-full">
              <div className="text-center">
                <p className="text-white">
                  <b>Bastien Daxhelet</b> - Développeur créatif
                </p>
              </div>
            </div>
          </Html>
        )}

        {choiceCamera === true && !tutorial && (
          <Html center position={[2, 0, -25]}>
            <div className="w-screen h-screen flex justify-center">
              <div className="flex flex-col justify-center items-center">
                <div className="">
                  <FaceSVGAnimation />
                </div>
                <p className="mt-14 text-xl font-bold text-white">
                  Bougez votre tête pour découvrir votre environnement
                </p>
                <button className="contact mt-12" onClick={() => tutorialEnd()}>
                  Compris
                </button>
              </div>
            </div>
          </Html>
        )}

        {choiceCamera === true && tutorial && cameraAccepted && (
          <group position={[2, 0, -25]}>
            <Html transform>
              <Radio2 />
            </Html>
            <Html transform position={[0, -10.5, 5]}>
              <BottomMenu />
            </Html>
            <Html transform position={[-17, 0, 10]}>
              <SideMenu />
            </Html>
          </group>
        )}

        {cameraAccepted === false && tutorial && (
          <Float rotationIntensity={0.2}>
            <group position={[2, 0, -25]}>
              <Html transform>
                <Radio2 />
              </Html>
              <Html transform position={[0, -10.5, 5]}>
                <BottomMenu />
              </Html>
              <Html transform position={[-17, 0, 10]}>
                <SideMenu />
              </Html>
            </group>
          </Float>
        )}

        <DeviceOrientationControls />
      </FaceLandmarker>
    </Canvas>

    // <Canvas>
    //   <Environment files="models/photostudio.hdr" background />

    //   <OrbitControls />

    //   <Html center>
    //     <div className="w-screen h-screen flex justify-center">
    //       <div className="flex justify-center items-center">
    //         <p className="text-xl font-bold text-white">
    //           Acceptez l’usage de la caméra pour découvrir l’expérience
    //         </p>
    //       </div>
    //     </div>
    //     <div className="absolute bottom-4 left-0 w-full">
    //       <div className="text-center">
    //         <p className="text-white">
    //           <b>Bastien Daxhelet</b> - Développeur créatif
    //         </p>
    //       </div>
    //     </div>
    //   </Html>

    // <group position={[2, 0, -25]}>
    //   <Html transform>
    //     <Radio2 />
    //   </Html>
    //   <Html transform position={[0, -7.5, 5]}>
    //     <BottomMenu />
    //   </Html>
    //   <Html transform position={[-17, 0, 10]}>
    //     <SideMenu />
    //   </Html>
    // </group>
    // </Canvas>
  );
}
