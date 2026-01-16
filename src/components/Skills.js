import React from 'react';
import '../Styles/style.css';
function Skills(){
  

  return (
    <>
    <section class="skills" id="skills">
        <div class="content">
            <div class="title">
                <span>My Skills</span>
            </div>
           <div class="skill-details">
             <div class="left">
                <div class="topic">
                    Skills Reflects our Knowledge.
                </div>
                <p>Analytical problem‑solving, structured dataset design, SQL optimization, Java development, conversational AI, cultural relevance, logical progression, Git workflows, UI/UX design, scalable solutions, debugging, innovation, adaptability, collaboration, continuous learning, impactful delivery</p>
                <div class="experience">
                    <div class="num">1</div>
                    <div class="exp">year<br />of experience</div>
                </div>
            </div>
            <div class="boxes">
                <div class="box">
                    <div class="topic">HTML</div>
                    <div class="num">90%</div>
                </div>
               
                <div class="box">
                    <div class="topic">CSS</div>
                    <div class="num">80%</div>
                </div>
                <div class="box">
                    <div class="topic">JS</div>
                    <div class="num">70%</div>
                </div>
                <div class="box">
                    <div class="topic">SQL</div>
                    <div class="num">70%</div>
                </div>
                <div class="box">
                    <div class="topic">JAVA</div>
                    <div class="num">80%</div>
                </div>
                 <div class="box">
                    <div class="topic">Hibernate</div>
                    <div class="num">80%</div>
                </div>
            </div>
           </div>
        </div>
    </section>
    </>
  );
}

export default Skills;