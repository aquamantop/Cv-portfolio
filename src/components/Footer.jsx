import { Link } from 'react-router-dom'
import { Copyright } from './Iconos'

export default function Footer() {
  return (
    <footer>
      <Copyright></Copyright>
      <Link
        to={'https://github.com/aquamantop/CV'}
        className="link-footer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Franco Rampazzo</span>
      </Link>
      <span>
        /
        <Link
          to={
            '/https://drive.google.com/file/d/13T1Gli1n1G93TPHPw8QXkaGX7FqPFElu/view?usp=sharing'
          }
          className="link-footer"
          target="_blank"
          rel="noopener noreferrer"
        >
          PDF
        </Link>
      </span>
    </footer>
  )
}
