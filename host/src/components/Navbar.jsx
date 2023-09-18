import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="host_nav">
      <nav className="navbar">
        <div className="logo"></div>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Componente1
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Componente2
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Componente3
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Componente4
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
