import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Portfolio</h1>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          

          <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;