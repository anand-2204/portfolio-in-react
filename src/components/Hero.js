import React from 'react';
import './Hero.css';

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
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
      
    </section>
  );
}

export default Hero;