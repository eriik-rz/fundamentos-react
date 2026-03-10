// ── COMPONENTE HIJO ──────────────────────────────────────────────
// Comunicación hijo → padre: el hijo llama a una función que le pasó el padre
// De esta forma el hijo puede enviar datos al padre

function LoginComponent(props) {

  // Objeto que almacena los datos del formulario
  // No es reactivo — no necesitamos que React re-renderice al escribir
  const user = {
    name: "",
    email: "",
  };

  // Actualiza user.name cada vez que el usuario escribe en el input de nombre
  const setUsername = (e) => {
    user.name = e.target.value;
  }

  // Actualiza user.email cada vez que el usuario escribe en el input de email
  const setEmail = (e) => {
    user.email = e.target.value;
  }

  // Se ejecuta al enviar el formulario
  // e.preventDefault() evita que la página se recargue (comportamiento por defecto del form)
  // Luego envía los datos al padre mediante props.handleLogin
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    props.handleLogin(user);
  };

  // Versión anterior — enviaba un usuario hardcodeado sin formulario
  // const handleClick = () => {
  //   props.handleLogin(user);
  // };

  return (
    <section>
      <h2>Login section</h2>

      {/* onSubmit en el form — se dispara al hacer clic en el botón o pulsar Enter */}
      <form onSubmit={handleSubmit}>

        <fieldset>
          <label>Nombre de usuario</label>
          {/* onChange llama a setUsername en cada tecla pulsada */}
          <input type="text" id="userName" onChange={setUsername}></input>
        </fieldset>

        <fieldset>
          <label>Email</label>
          {/* onChange llama a setEmail en cada tecla pulsada */}
          <input type="email" id="userEmail" onChange={setEmail}></input>
        </fieldset>

        {/* Sin onClick — el botón dentro de un form hace submit automáticamente */}
        <button>Login</button>

      </form>
    </section>
  );
}

export default LoginComponent;