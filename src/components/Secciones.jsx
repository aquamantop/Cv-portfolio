import { Link } from "react-router-dom";
import { Github, Linkedin } from "./Iconos";

export function DatosPersonales() {
  return (
    <section className='secciones'>
      <h2>DATOS PERSONALES</h2>
      <ul type='none'>
        <li>
          <span className='cajaSpan'>Nombre completo</span>: Franco Rodrigo
          Rampazzo
        </li>
        <li>
          <span className='cajaSpan'>Fecha de nacimiento</span>: 19/02/1996
        </li>
      </ul>
    </section>
  );
}

export function Tecnologias() {
  return (
    <section className='secciones'>
      <h2>TECNOLOGIAS</h2>
      <ul type='none'>
        <li>Spring Boot</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>Hibernate</li>
        <li>MySQL</li>
      </ul>
    </section>
  );
}

export function Formacion() {
  return (
    <section className='secciones'>
      <h2>FORMACIÓN ACADÉMICA</h2>
      <ul type='none'>
        <li>
          <span className='cajaSpan'>2016-2023</span>: UBA
        </li>
        <span>Licenciatura en Psicología</span>
        <li>
          <span className='cajaSpan'>2021-2022</span>: Digital House
        </li>
        <span>Certified Tech Developer</span>
      </ul>
    </section>
  );
}

export function Redes() {
  return (
    <section id='redes'>
      <Link to={'https://www.linkedin.com/in/franco-rodrigo-rampazzo-969b331aa/'}
        className='contacto'
        id='in'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Linkedin/>
      </Link>
      <Link to={'https://github.com/aquamantop'}
        className='contacto'
        id='gh'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Github/>
      </Link>
    </section>
  );
}
