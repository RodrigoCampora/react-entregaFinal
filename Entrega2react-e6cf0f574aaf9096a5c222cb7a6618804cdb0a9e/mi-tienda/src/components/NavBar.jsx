import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">MiTienda</div>
      <ul className="nav-links">
        <li><Link to="/">Todos</Link></li>
        <li><Link to="/category/remeras">Remeras</Link></li>
        <li><Link to="/category/pantalones">Pantalones</Link></li>
        <li><Link to="/category/calzados">Calzados</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
