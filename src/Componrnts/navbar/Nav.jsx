import { Component } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./nav.css";


class Nav extends Component {
  constructor() {
    super();
    this.state = { active: "#" };
  }

  render() {
    return (
      <nav>
        <a
          onClick={() => this.setState({ active: "#" })}
          className={this.state.active === "#" ? "active" : ""}
          href="#"
        >
          <AiOutlineHome />
        </a>
        <a
          onClick={() => this.setState({ active: "#about" })}
          className={this.state.active === "#about" ? "active" : ""}
          href="#about"
        >
          <AiOutlineUser />
        </a>
        <a
          onClick={() => this.setState({ active: "#contact" })}
          className={this.state.active === "#contact" ? "active" : ""}
          href="#contact"
        >
          <BiMessageSquareDetail />
        </a> 
      </nav>
    );
  }
}

export default Nav;
