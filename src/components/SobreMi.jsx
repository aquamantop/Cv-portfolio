import React from 'react'
import { Repositorios } from './Repositorios'
import Footer from './Footer'
import BtnSobreMi from './BtnSobreMi'
import Header from './Header'

export default function SobreMi() {
  return (
    <div id="fondo2">
      <Header titulo={'Mis repositorios'} />
      <main id="mainRepo">
        <section id="descripcion">
          <p id='textSobreMi'>
            Estudio programación en la carrera de Certified Tech Developer en
            Digital House a traves de la beca otorgada por Mercado Libre junto
            con Globant, donde empecé a aprender acerca de la programación Full
            Stack desde la práctica con las herramientas y tecnologias actuales.
          </p>
        </section>
        {/* <p id="aclaracion">Click en las imágenes para ir al sitio</p> */}
        <div id="contenedorRepo">
          <Repositorios></Repositorios>
          <BtnSobreMi clase={"boton2"} link={'/'} titulo={'Inicio'} iden={"inicio"}/>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}
