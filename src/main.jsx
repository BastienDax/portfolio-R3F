import React, { Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PlayProvider } from "./contexts/Play";
import background from "/models/screen-bg.jpeg";

function Main() {
  return (
    <React.StrictMode>
      <PlayProvider>
        <App />
      </PlayProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
