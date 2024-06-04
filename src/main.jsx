import React, { Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PlayProvider } from "./contexts/Play";
import background from "/models/screen-bg.jpeg";

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
    <div className="loader bg-black h-full w-full text-3xl flex justify-center items-center text-white">
      <img
        className="h-full w-full top-0 left-0 absolute blur-xl"
        src={background}
        alt="background"
      />
      <span className=" z-10">{count * 2}%</span>
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
