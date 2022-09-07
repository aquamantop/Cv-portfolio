import { Link } from "react-router-dom";
import "../styles/style.css";

export default function BtnSobreMi(props) {
    return (
        <button className="boton">
            <Link to={props.link} id="sobreMi">{props.titulo}</Link>
        </button>
    )
}

