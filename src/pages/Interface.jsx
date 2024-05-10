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
import FaceSVGAnimation from "../components/FaceSVGAnimation";
import InterfaceMenu from "./InterfaceMenu";
import { useState } from "react";
import { BottomMenu } from "../components/BottomMenu";

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
    setTutorial(true);
  };

  const changeAccesCamera = () => {
    if (cameraAccepted) {
      setCameraAccepted(false);
    } else {
      setCameraAccepted(true);
    }
  };

  const tutorialEnd = () => {
    setTutorial(true);
  };

  return (
    <>
      {cameraAccepted ? (
        <Canvas>
          <FaceLandmarker>
            <Environment
              files="models/deskroom2k.hdr"
              background
              resolution={256}
              backgroundRotation={[0, Math.PI / 2, 0]}
              backgroundIntensity={0.1}
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
                      <button
                        className="contact"
                        onClick={() => acceptCamera()}
                      >
                        Accepter
                      </button>
                      <button
                        className="contact"
                        onClick={() => deniedCamera()}
                      >
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
            {choiceCamera === true && !tutorial && cameraAccepted && (
              <Html center position={[2, 0, -25]}>
                <div className="w-screen h-screen flex justify-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="">
                      <FaceSVGAnimation />
                    </div>
                    <p className="mt-14 text-xl font-bold text-white">
                      Bougez votre tête pour découvrir votre environnement
                    </p>
                    <button
                      className="contact mt-12"
                      onClick={() => tutorialEnd()}
                    >
                      J'ai compris
                    </button>
                  </div>
                </div>
              </Html>
            )}

            {choiceCamera === true && tutorial && cameraAccepted && (
              <Html center position={[2, 0, -25]}>
                <InterfaceMenu />
              </Html>
            )}

            <DeviceOrientationControls />
          </FaceLandmarker>
        </Canvas>
      ) : (
        <Canvas>
          <Environment
            files="models/deskroom2k.hdr"
            background
            resolution={256}
            backgroundRotation={[0, Math.PI / 2, 0]}
            backgroundIntensity={0.1}
          />

          <PerspectiveCamera makeDefault near={0.1} far={2000} fov={75} />

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

          {choiceCamera === true && !tutorial && cameraAccepted && (
            <Html center position={[2, 0, -25]}>
              <div className="w-screen h-screen flex justify-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="">
                    <FaceSVGAnimation />
                  </div>
                  <p className="mt-14 text-xl font-bold text-white">
                    Bougez votre tête pour découvrir votre environnement
                  </p>
                  <button
                    className="contact mt-12"
                    onClick={() => tutorialEnd()}
                  >
                    J'ai compris
                  </button>
                </div>
              </div>
            </Html>
          )}

          {cameraAccepted === false && !cameraAccepted && (
            <Float rotationIntensity={0.2}>
              <Html center position={[2, 0, -25]}>
                <InterfaceMenu />
              </Html>
            </Float>
          )}
        </Canvas>
      )}
      {tutorial && (
        <div className="absolute bottom-4 right-4 pointer-events-auto z-50">
          <label className="switch">
            <input
              type="checkbox"
              checked={cameraAccepted}
              onClick={() => changeAccesCamera()}
            />
            <span className="slider pointer-events-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_368_1621)">
                  <path
                    d="M1.3125 4.44718V4.39944C1.3125 2.80112 2.60825 1.50537 4.20657 1.50537H4.25431"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.8012 15.0527V15.1005C17.8012 16.6988 16.5054 17.9945 14.9071 17.9945H14.8594"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.3125 15.0527V15.1005C1.3125 16.6988 2.60825 17.9945 4.20657 17.9945H4.25431"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.8594 1.50537H14.9071C16.5054 1.50537 17.8012 2.80112 17.8012 4.39944V4.44718"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.1155 5.53516H6.09357C5.6115 5.53516 5.2207 5.92595 5.2207 6.40802V6.96736C5.2207 7.44943 5.6115 7.84022 6.09357 7.84022H6.1155C6.59758 7.84022 6.98837 7.44943 6.98837 6.96736V6.40802C6.98837 5.92595 6.59758 5.53516 6.1155 5.53516Z"
                    fill="white"
                  />
                  <path
                    d="M13.0218 5.53516H12.9998C12.5177 5.53516 12.127 5.92595 12.127 6.40802V6.96736C12.127 7.44943 12.5177 7.84022 12.9998 7.84022H13.0218C13.5038 7.84022 13.8946 7.44943 13.8946 6.96736V6.40802C13.8946 5.92595 13.5038 5.53516 13.0218 5.53516Z"
                    fill="white"
                  />
                  <path
                    d="M6.60938 14.3721C7.38934 15.1914 8.42349 15.6291 9.55764 15.6291C10.6918 15.6291 11.7259 15.1914 12.5059 14.3721"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9.6106 8.73828L10.2922 9.41987C10.3735 9.50115 10.3735 9.63308 10.2922 9.71469L8.99805 11.0088"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_368_1621">
                    <rect
                      width="19"
                      height="19"
                      fill="white"
                      transform="translate(0.0585938 0.25)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </label>
        </div>
      )}
    </>
  );
}
