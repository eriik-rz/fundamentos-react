// ── RENDERIZADO DE LISTAS ─────────────────────────────────────────
// Para mostrar listas en React usamos map(), que transforma
// un array de datos en un array de elementos JSX

import { useEffect } from "react"

function MovieListComponent() {

  const movies = ["F&F", "Star Wars", "Cars"]

  // map() recorre el array y devuelve un nuevo array de elementos JSX
  // index es la posición del elemento (0, 1, 2...)
  // key es obligatorio en listas — React lo usa internamente para
  // identificar cada elemento y saber cuál actualizar si cambia la lista
  const HTMLMovies = movies.map((movie, index) => {
    return <p key={movie}>{index + 1} - {movie}</p>
  })

  // [] vacío — se ejecuta solo cuando el componente se monta (aparece en pantalla)
  useEffect(() => {
    console.log("MovieListComponent mounted")
  }, [])

  // [] vacío con return — el return se ejecuta cuando el componente se desmonta
  // (desaparece de pantalla, por ejemplo al pulsar Toggle Movies)
  useEffect(() => {
    return () => {
      console.log("MovieListComponent UNmounted")
    }
  }, [])

  return (
    <section>
      <h2>Movies</h2>

      {/* Renderizamos el array de elementos JSX directamente */}
      {HTMLMovies}
    </section>
  )
}

export default MovieListComponent