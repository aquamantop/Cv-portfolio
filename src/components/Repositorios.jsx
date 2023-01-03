import { Articulos } from '../Json/articulos'

function proyecto(id, codigo){
  if(id === 1){
    return <br></br>
  } else {
    return( 
    <button className="codigo">
          <a href={codigo} target="_blank" rel="noopener noreferrer">
            Código
          </a>
    </button>
    )
  }
}

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
        {(proyecto(e.id, e.linkCodigo))}
      </article>
    )
  })
}


