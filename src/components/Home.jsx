import React from 'react'
import BtnSobreMi from './BtnSobreMi'
import Footer from './Footer'
import Header from './Header'
import { DatosPersonales, Formacion, Tecnologias, Redes } from './Secciones'

export default function Home() {
  return (
    <React.Fragment>
      <Header titulo={'Franco Rampazzo'} />
      <main id="contenedor">
        <DatosPersonales />
        <Formacion />
        <Tecnologias />
        <Redes />
        <BtnSobreMi clase={"boton"} link={'SobreMi'} titulo={'Sobre mi'} iden={"sobreMi"}/>
      </main>
      <Footer></Footer>
    </React.Fragment>
  )
}
