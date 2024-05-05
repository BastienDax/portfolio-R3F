import { OrbitControls } from "@react-three/drei";
import { Deskroom } from "./Deskroom";
import { Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % chargé</Html>;
}

export const Experience = () => {
  return (
    <>
      {/* <OrbitControls /> */}

      <Suspense fallback={<Loader />}>
        <Deskroom />
      </Suspense>
    </>
  );
};
