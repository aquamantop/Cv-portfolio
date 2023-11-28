import { Copyright } from './Iconos'

export default function Footer() {
  return (
    <footer>
      <Copyright></Copyright>
      <a
        href="https://github.com/aquamantop/Cv-react-app"
        className="link-footer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Repo</span>
      </a>
      <span>
        /
        <a
          href="https://drive.google.com/file/d/1J8RURLmzWD4ghNEHeZByauPh0_AB1WrI/view?usp=sharing"
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
