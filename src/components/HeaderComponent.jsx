import "./HeaderComponent.css";

// ── COMPONENTE HIJO ──────────────────────────────────────────────
// Recibe datos del padre (App) mediante props
// props es un objeto con todas las propiedades que le pasa el padre

function HeaderComponent(props) {

  // Desestructuramos props para usar las variables directamente
  // equivale a: props.greetings y props.links
  const { greetings, links } = props;

  return (
    <header className="header">

      {/* Mostramos el saludo que viene del padre */}
      <h1 className="title">{greetings}</h1>

      <nav>
        <ul className="header-list">
          {/* Cada link viene del objeto links que pasó el padre */}
          <li><a className="link" href="#">{links.home}</a></li>
          <li><a className="link" href="#">{links.blog}</a></li>
          <li><a className="link" href="#">{links.news}</a></li>
          <li><a className="link" href="#">{links.contact}</a></li>
        </ul>
      </nav>

    </header>
  );
}

export default HeaderComponent;