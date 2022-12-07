import { Component } from "react";
import CTA from "./CAT";
import ME from "../assets/cartunImg.png"
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
          <div className="me">
            <img src={ME} alt="ME" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
