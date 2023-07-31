import React from "react";
import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
// import ME from "../assets/cartunImg.png";
import ME from "./assets/cartunImg.png";
import CV from "./assets/Hirak Debadhikary Resume.pdf";
import "./home.css";
const Home = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h3>Hello Everyone I'm</h3>
        <h1 id="user-detail-name">Hirak Debadhikary</h1>
        <div className="text-light">Full Stack Web Developer</div>
        <div className="cta">
          <a id="resume-button-2" href={CV} download>
            Download CV
          </a>
          <a className="btn btn-primary" href="#contact">
            Let's Talk
          </a>
        </div>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/hirak-debadhikary-374b9522b/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin />
          </a>
          <a
            href="https://github.com/Hirak-Debadhikary"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="mailto:debadhikaryhirak@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineEmail />
          </a>
        </div>
        <div className="me">
          <img src={ME} alt="ME" />
        </div>
      </div>
    </header>
  );
};

export default Home;
