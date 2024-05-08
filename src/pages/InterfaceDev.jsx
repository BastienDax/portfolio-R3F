import React from "react";
import { Suspense } from "react";

function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulez une progression de chargement
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
      }
    }, 100); // Changez le délai selon vos besoins

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-full flex justify-center items-center">
      Chargement... {progress}%
    </div>
  );
}

export default function InterfaceDev() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="h-full flex flex-col justify-center items-center">
        <p className="text-xl">🚧 Interface en développement 🚧</p>
        <a className="contact mt-10" href="/">
          Retour à l'accueil
        </a>
      </div>
    </Suspense>
  );
}
