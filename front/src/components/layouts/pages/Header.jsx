import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="search">
        <input typeof="text" placeholder="Buscar"/>
        <button typeof="submit">Buscar</button>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="#">Inicio</Link>
          </li>
          <li>
            <Link href="#">Acerca de</Link>
          </li>
          <li>
            <Link href="#">Servicios</Link>
          </li>
          <li>
            <Link href="#">Contacto</Link>
          </li>
          <li>
            <Link to="/">Cerrar Sesion</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;