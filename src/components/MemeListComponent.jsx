import "./MemeListComponent.css";
import { useEffect, useState } from "react"

function MemeListComponent() {

  // Estado que almacena el array de memes que devuelve la API
  // Empieza vacío y se rellena cuando llega la respuesta
  const [memes, setMemes] = useState([]);

  // map() transforma cada meme del array en un elemento JSX
  // key obligatorio en listas — usamos meme.id que es único
  const HTMLMemes = memes.map((meme) => {
    return (
      <li key={meme.id}>
        <h2>{meme.name}</h2>
        <img src={meme.url} alt="meme img" className="meme-img"></img>
      </li>
    )
  })

  // [] vacío — se ejecuta solo una vez cuando el componente se monta
  useEffect(() => {

    // useEffect no puede ser async directamente, por eso creamos
    // una función async dentro y la llamamos inmediatamente
    const getMemes = async () => {
      const respuesta = await fetch("https://api.imgflip.com/get_memes")  // espera la respuesta
      const datos = await respuesta.json()                                 // espera la conversión a JSON
      console.log(datos.data.memes);
      setMemes(datos.data.memes)                                           // guarda los memes en el estado
    }

    getMemes()

  }, [])


  return (
    <ul className="meme-list">
      {/* Renderizamos el array de elementos JSX directamente */}
      {HTMLMemes}
    </ul>
  )
}

export default MemeListComponent