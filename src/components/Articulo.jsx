import { Articulos } from '../Json/articulos'

export function Repositorios() {
  return Articulos.map((e) => {
    return (
      <article key={e.id} className="repos">
        <p className="descripcionRepo">{e.descripcion}</p>
        <a href={e.linkRepo} target="_blank" rel="noopener noreferrer">
          <img
            src={e.img}
            alt={e.alt}
            className="tamañoRepo"
          />
        </a>
        <button className="codigo">
          <a href={e.linkCodigo} target="_blank" rel="noopener noreferrer">
            Código
          </a>
        </button>
      </article>
    )
  })
}
