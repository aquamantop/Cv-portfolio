import React from 'react'
import { Outlet } from 'react-router-dom'
import BtnSobreMi from './BtnSobreMi'
import Header from './Header'

export default function SobreMi() {
  return (
    <React.Fragment>
      <Header titulo={'Mis repositorios'} />
      <BtnSobreMi link={'/'} titulo={'Inicio'} />
      <Outlet></Outlet>
    </React.Fragment>
  )
}
