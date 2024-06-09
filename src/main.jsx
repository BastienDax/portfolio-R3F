import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PlayProvider } from "./contexts/Play";

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
