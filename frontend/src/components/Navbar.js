import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Research App</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Search Papers</Link>
        </li>
        <li>
          <Link to="/saved">Saved Papers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
