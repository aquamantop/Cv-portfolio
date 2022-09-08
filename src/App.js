import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import React from "react";
import "./styles/style.css";
import SobreMi from "./components/SobreMi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/SobreMi' element={<SobreMi></SobreMi>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
