import { useEffect, useState } from "react"

function MemeListComponent() {
  const [memes,setMemes] = useState([]);

  const HTMLMemes = memes.map((meme) => {
    return (
      <li key={meme.id}>
        <h2>meme.name</h2>
        <img src={meme.url} alt="meme img" className="meme-img"></img>
      </li>
    )
  })

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      console.log(datos.data.memes);
      setMemes(datos.data.memes);
    })
  },[])


  return (
    <ul className="meme-list">
      {HTMLMemes}
    </ul>
  )
}

export default MemeListComponent