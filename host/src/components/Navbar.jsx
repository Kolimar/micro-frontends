import React from "react";
import "./Navbar.css";

import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="host_nav">
      <nav className="navbar">
        <div className="logo"></div>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects">Componente2</Link>
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
      <Outlet />
    </div>
  );
};

export default Navbar;
