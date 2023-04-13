import { Github, Linkedin } from './Iconos'
import { TecnoIconos } from './Iconos'

export function DatosPersonales() {
  return (
    <section className="secciones">
      <h2>DATOS PERSONALES</h2>
      <ul type="none">
        <li>
          <span className="cajaSpan">Nombre completo</span>: Franco Rodrigo
          Rampazzo
        </li>
        <li>
          <span className="cajaSpan">Fecha de nacimiento</span>: 19/02/1996
        </li>
      </ul>
    </section>
  )
}

export function Tecnologias() {
  return (
    <section className="secciones">
      <h2>TECNOLOGIAS</h2>
      <ul type="none" className='tecno'>
        {TecnoIconos.map(e => {
          return (
          <li className='tecnoIcono' key={e.id} title={e.tecno}>{e.icono}</li>
          )
        })}
      </ul>
    </section>
  )
}

export function Formacion() {
  return (
    <section className="secciones">
      <h2>FORMACIÓN ACADÉMICA</h2>
      <ul type="none">
        <li>
          <span className="cajaSpan">2016-2024(prevista)</span>: UBA
        </li>
        <span>Licenciatura en Psicología</span>
        <li>
          <span className="cajaSpan">2021-2022</span>: Digital House
        </li>
        <span>Certified Tech Developer</span>
        <li>
          <span className="cajaSpan">2023(feb)-2023(dic)</span>: Digital House
        </li>
        <span>Backend Specialist</span>
      </ul>
    </section>
  )
}

export function Redes() {
  return (
    <section id="redes">
      <a href='https://www.linkedin.com/in/franco-rodrigo-rampazzo-969b331aa/'
        className="contacto"
        id="in"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </a>
      <a
        href='https://github.com/aquamantop'
        className="contacto"
        id="gh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
      </a>
    </section>
  )
}
