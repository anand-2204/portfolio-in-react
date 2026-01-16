import React from 'react';
import '../Styles/style.css';
import anandImage from "../Assets/anand.jpg";


function About() {
  

  return (
   <>
    <section class="about" id="about">
        <div class="content">
            <div class="title">
                <span>About Me</span>

            </div>
            <div class="about-details">
                <div class="right">
                   <img src={anandImage} alt="Anand" />
                </div>
                <div class="left">
                    <div class="topic">Development Is My Passion</div>
                    <p>I am a passionate developer, driven by curiosity and creativity. I thrive on solving complex problems, building meaningful applications, and learning continuously. Technology excites me, innovation inspires me, and collaboration empowers me.</p>
                     <div class="button">
                <button>Hire me</button>
            </div>
                </div>
            </div>
        </div>
    </section>
   </>
  );
}

export default About;