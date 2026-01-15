import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with cart, payment integration, and user authentication.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Digital Watch',
      description: 'Collaborative task manager with real-time updates, drag-and-drop functionality, and team collaboration.',
      tech: ['HTML', 'CSS', 'JS'],
      link: 'https://anand-2204.github.io/Watch/',
      github: 'https://github.com/anand-2204/Watch.git'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking application with interactive maps, forecasts, and location-based alerts.',
      tech: ['HTML','CSS', 'API Integration', 'JS'],
      link: 'https://anand-2204.github.io/WeatherApp/',
      github: 'https://github.com/anand-2204/WeatherApp.git'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects and skills with modern design and smooth animations.',
      tech: ['HTML', 'CSS3', 'Responsive Design','JS'],
      link: 'https://anand-2204.github.io/myPortfolio/',
      github: 'https://github.com/anand-2204/myPortfolio.git'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link">Live Demo</a>
                <a href={project.github} className="project-link">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;