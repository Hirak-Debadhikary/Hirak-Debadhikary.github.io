import React from "react";
import ME from "./assets/Hirak.png";
import "./about.css";
function About() {
  return (
    <section id="about" class="about section">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="home-img">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div id="user-detail-intro">
          <p>
            An aspiring full-stack developer with experience in both front-end
            and back-end development. I have a strong background in HTML, CSS,
            and JavaScript, and I am also proficient in react.js, node.js,
            express.js, and redux. I am a quick learner and have solid attention
            to detail. I am seeking a challenging role in the field of software
            development that will offer an opportunity for further development
            of my abilities, skills and knowledge in an organization.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
