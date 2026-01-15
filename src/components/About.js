import React from 'react';
import './About.css';

function About() {
  const skills = [
    'Java',
    'React',
    'JavaScript',
    'HTML & CSS',
    'SQL',
    'Hibernate with JPA',
    'Postman',
    'Git & GitHub',
    

  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate developer with experience in building web applications.
              I love creating user-friendly interfaces and solving complex problems.
            </p>
            <p>
              With a strong foundation in modern web technologies, I strive to create
              applications that are not only functional but also beautiful and intuitive.
            </p>
          </div>
          <div className="about-skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;