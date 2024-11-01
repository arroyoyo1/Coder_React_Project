import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <img className="logotipo" src="/logotipo.png" alt="logotipo" />
        </Link>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link to="/category/1981" className="category-navbar">1981</Link>
          </li>
          <li className="navbar-item">
            <Link to="/category/1982" className="category-navbar">1982</Link>
          </li>
          <li className="navbar-item">
            <Link to="/category/1984" className="category-navbar">1984</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}