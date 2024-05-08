import React, { Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PlayProvider } from "./contexts/Play";

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

function Main() {
  return (
    <React.StrictMode>
      <PlayProvider>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </PlayProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
