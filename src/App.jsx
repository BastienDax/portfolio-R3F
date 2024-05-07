import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InterfaceDev from "./pages/InterfaceDev";
import Interface from "./pages/Interface";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/interface-dev" element={<InterfaceDev />} />
          <Route path="/interface" element={<Interface />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
