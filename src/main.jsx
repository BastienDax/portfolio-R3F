import React, { Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PlayProvider } from "./contexts/Play";

function Loading({ onComplete }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 50) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 50);

      return () => clearInterval(interval);
    } else {
      onComplete();
    }
  }, [count, onComplete]);

  return (
    <div className="h-full flex justify-center items-center">
      Chargement... {count * 2}%
    </div>
  );
}

function Main() {
  const handleLoadingComplete = () => {
    setIsAppVisible(true);
  };

  return (
    <React.StrictMode>
      <PlayProvider>
        <Suspense fallback={<Loading onComplete={handleLoadingComplete} />}>
          <App />
        </Suspense>
      </PlayProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
