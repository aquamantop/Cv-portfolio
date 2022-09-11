import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import React from "react";
import "./styles/style.css";
import SobreMi from "./components/SobreMi";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='SobreMi' element={<SobreMi/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
