import React from 'react';
import '../Styles/style.css';

function Hero() {
  return (
    <section class="home" id="home">
        <div class="home-content">
            <div class="text">
                <div class="text-one">Hello,</div>
                <div class="text-two">I'm Anand</div>
                <div class="text-three">FrontEnd Developer</div>
                <div class="text-four">From India</div>
                

            </div>
            <div class="button">
                <button>Hire me</button>
            </div>
        </div>
    </section>
  );
}

export default Hero;