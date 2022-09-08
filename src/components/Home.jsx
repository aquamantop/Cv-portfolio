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
        <BtnSobreMi link={'/SobreMi'} titulo={'Sobre mi'} />
      </main>
      <Footer clase='footerHome'></Footer>
    </React.Fragment>
  )
}
