import { Component } from "react";
import CTA from "./CAT";
import ME from "../assets/cartunImg.png";
import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import "./header.css";
class Header extends Component {
  render() {
    return (
      <header>
        <div className="container header__container">
          <h4>Hello Everyone I'm</h4>
          <h1>Hirak Debadhikary</h1>
          <div className="text-light">Fullstack Web Developer</div>
          <CTA />
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
  }
}

export default Header;
