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
          href="https://drive.google.com/file/d/13T1Gli1n1G93TPHPw8QXkaGX7FqPFElu/view?usp=sharing"
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
