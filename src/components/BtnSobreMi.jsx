import { Link } from 'react-router-dom'

export default function BtnSobreMi(props) {
  return (
    <button className={props.clase}>
      <Link to={props.link} id={props.iden}>
        {props.titulo}
      </Link>
    </button>
  )
}
