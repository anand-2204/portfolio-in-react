import React from 'react';
import './Hero.css';
import {Link} from 'react-router-dom'
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Anand</h1>
        <p className="hero-subtitle">FrontEnd Developer</p>
        <p className="hero-description">
          I build amazing web applications with React and modern technologies
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">View My Work</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
        </div>
      </div>
      
    </section>
  );
}

export default Hero;