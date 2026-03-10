import { useEffect, useState } from 'react'
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import HeaderComponent from './components/HeaderComponent'
import LoginComponent from './components/LoginComponent'
import MovieListComponent from './components/MovieListComponent'
import MemeListComponent from './components/MemeListComponent'

// ── COMPONENTE PADRE ─────────────────────────────────────────────
// App es el componente padre, pasa datos a los hijos mediante props

function App() {

  // ── VARIABLES REACTIVAS (hooks) ──────────────────────────────
  // useState devuelve [valorActual, funcionParaCambiarlo]
  // Cada vez que cambia el valor, React vuelve a renderizar el componente
  const [user, setUser] = useState({})
  const [number, setNumber] = useState(0);
  const [myValue, setMyValue] = useState("");

  // Controla si se muestra o no el componente MovieListComponent
  const [showMovies, setShowMovies] = useState(true);

  // Props que se pasarán al componente hijo HeaderComponent
  const [greetings, setGreetings] = useState("Bienvenidos a mi web");

  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact US"
  }

  // Variable NO reactiva — si cambia, la pantalla no se actualiza
  const condition = false;
  let myPlaceholder = "Escribe aquí";


  // ── FUNCIONES ────────────────────────────────────────────────

  // Clic en el saludo — solo visible tras hacer login
  const sayHello = () => {
    console.log("Hello!");
  }

  // Suma 1 al number
  // Usamos setNumber para cambiar el valor, nunca directamente (number++)
  // setNumber(number++) tampoco vale, porque modifica number antes de pasarlo
  const addOne = () => {
    setNumber(number + 1);
    console.log("addOne - number = " + number);
  }

  // Se ejecuta cada vez que el usuario escribe en el input
  // e.target.value contiene el texto actual del input
  const handleChange = (e) => {
    console.log(e.target.value);
  }

  // Recibe los datos del usuario desde el hijo LoginComponent (hijo → padre)
  // El hijo llama a esta función pasándole el objeto user como argumento
  const login = (userInfo) => {
    console.log(userInfo);
    setUser(userInfo);
  }


  // ── HOOKS DE EFECTO (useEffect) ───────────────────────────────
  // useEffect permite ejecutar código cuando algo cambia o el componente se monta/desmonta

  // Sin array de dependencias — se ejecuta en cada renderizado del componente
  // useEffect(() => {
  //   console.log("Ejecucion cada vez que se renderiza el componente App")
  // })

  // Con [user] como dependencia — solo se ejecuta cuando user cambia
  useEffect(() => {
    console.log("Ejecucion reactiva con cada cambio de la variable user")
  }, [user])


  // ── RENDER ───────────────────────────────────────────────────
  // Solo puede haber un elemento raíz, por eso usamos <> (Fragment)
  return (
    <>
      {/* Pasamos props al hijo HeaderComponent: greetings y links */}
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

      <main className='main-content'>

        {/* ── LOGIN (hijo → padre) ─────────────────────────────── */}
        {/* LoginComponent llama a login() con los datos del usuario */}
        {/* Una vez logueado se muestra el saludo con el nombre */}
        <div className="section-block">
          <LoginComponent handleLogin={login}></LoginComponent>
          {user.name && <h2 onClick={sayHello}>Hola {user.name}</h2>}
        </div>

        {/* ── TOGGLE MOVIES ────────────────────────────────────── */}
        {/* El botón alterna showMovies entre true y false */}
        {/* Cuando showMovies es false, MovieListComponent se desmonta */}
        {/* y su useEffect de cleanup (unmount) se ejecuta */}
        <div className="section-block">
          <button onClick={() => setShowMovies(!showMovies)}>Toggle Movies</button>
          {showMovies && <MovieListComponent></MovieListComponent>}
        </div>

        {/* ── RENDERIZADO CONDICIONAL ──────────────────────────── */}
        {/* && — muestra el elemento solo si la condición es true */}
        {/* Ternario — siempre muestra algo: una cosa u otra */}
        {/* condicion ? (si true) : (si false) */}
        <div className="section-block">
          {condition && <h2>La condicion se cumple</h2>}
          {!condition && <h2>La condicion no se cumple</h2>}
          {condition ? (
            <h2>2 La condicion se cumple 2</h2>
          ) : (
            <h2>2 La condicion no se cumple 2</h2>
          )}
        </div>

        {/* ── CONTADOR ─────────────────────────────────────────── */}
        {/* Clic en el h2 suma 1 al number */}
        <div className="section-block">
          <h2 onClick={addOne}>Number: {number}</h2>
        </div>

        {/* ── INPUT ────────────────────────────────────────────── */}
        {/* Muestra en consola lo que escribe el usuario */}
        <div className="section-block">
          <input value={myValue} type='text' onChange={handleChange} placeholder={myPlaceholder}></input>
        </div>

        {/* ── LISTA DE PELÍCULAS ───────────────────────────────── */}
        {/* Renderizado de listas con map() */}
        <div className="section-block">
          <MovieListComponent></MovieListComponent>
        </div>

        {/* ── BOTÓN ────────────────────────────────────────────── */}
        <div className="section-block">
          <ButtonComponent></ButtonComponent>
        </div>

        <MemeListComponent></MemeListComponent>

      </main>
    </>
  )
}

export default App