import { Component } from "react";
import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import "./mnav.css";
class Mnav extends Component {
  render() {
    return (
      <footer>
        <a href="#" className="footer__logo">
          Hirak
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
            <a href="#github">GitHub</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1YdZ1weCRYntM5kvUox96hO1Q6-bpeevm/view?usp=sharing">
              Resume
            </a>
          </li>
        </ul>
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
      </footer>
    );
  }
}

export default Mnav;
