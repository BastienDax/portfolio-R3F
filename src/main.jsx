import React, { Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PlayProvider } from "./contexts/Play";

function Loading() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 100) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <div className="h-full text-xl flex justify-center items-center">
      {count}%
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
