import { Copyright } from './Iconos'

export default function Footer(props) {
  return (
    <footer>
      <Copyright></Copyright>
      <a
        href="https://github.com/aquamantop/Cv-react-app"
        className="link-footer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Franco Rampazzo</span>
      </a>
      <span>
        /
        <a
          href="https://drive.google.com/file/d/1IjQ85cp84HeZjdBaS2EgRicI_cPyfm-H/view?usp=sharing"
          className="link-footer"
          target="_blank"
          rel="noopener noreferrer"
        >
          PDF
        </a>
      </span>
    </footer>
  )
}
