import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Portfolio</h1>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" className="nav-link" onClick={closeMenu}>
            About
          </Link>

          <Link to="/projects" className="nav-link" onClick={closeMenu}>
            Projects
          </Link>

          <Link to="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
      </div>

    </header>
</>
  );
}

export default Header;
