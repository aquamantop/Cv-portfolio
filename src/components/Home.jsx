import React from "react";
import { Outlet } from "react-router-dom";
import BtnSobreMi from "./BtnSobreMi";
import Header from "./Header";

export default function Home() {
  return (
    <React.Fragment>
      <Header titulo={'Franco Rampazzo'} />
      <BtnSobreMi link={"/SobreMi"} titulo={"Sobre mi"} />
      <Outlet></Outlet>
    </React.Fragment>
  );
}
