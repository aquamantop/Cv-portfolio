import React from "react";
import BtnSobreMi from "./BtnSobreMi";
import Header from "./Header";
import { DatosPersonales, Formacion, Tecnologias, Redes} from './Secciones'

export default function Home() {
  return (
    <React.Fragment>
      <Header titulo={'Franco Rampazzo'} />
      <DatosPersonales/>
      <Formacion/>
      <Tecnologias/>
      <Redes/>
      <BtnSobreMi link={"/SobreMi"} titulo={"Sobre mi"} />
    </React.Fragment>
  );
}
