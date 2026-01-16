import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/style.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  
  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <header className="header">
      <div className="scroll-btn">
        <a href="#home">
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>

      <nav className={isSticky ? "sticky" : ""}>
        <div className={`navbar ${isMenuOpen ? "active" : ""}`}>
          <div className="logo">
            <a href="#home">Portfolio</a>
          </div>

          <ul className="menu">
            <li><Link to="/" onClick={handleNavLinkClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleNavLinkClick}>About</Link></li>
            <li><Link to="/skill" onClick={handleNavLinkClick}>Skills</Link></li>
            <li><Link to="/service" onClick={handleNavLinkClick}>Services</Link></li>
            <li><Link to="/contact" onClick={handleNavLinkClick}>Contact</Link></li>

            <div className="cancle-btn" onClick={closeMenu}>
              <i className="fas fa-times"></i>
            </div>
          </ul>

          <div className="media-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="menu-btn" onClick={openMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;