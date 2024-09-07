import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <img className="logotipo" src="/logotipo.png" alt="logotipo" />
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li className="navbar-item">
            <a href="#">About us</a>
          </li>
          <li className="navbar-item">
            <a href="#">Gallery</a>
          </li>
          <li className="navbar-item">
            <a href="#">Donations</a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}

