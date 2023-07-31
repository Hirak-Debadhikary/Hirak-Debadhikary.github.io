import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
// import {CV} from "../Components/assets/Hirak Debadhikary Resume.pdf"
// import CV from "./assets/Hirak Debadhikary Resume.pdf";
import CV from "./assets/Hirak Debadhikary Resume.pdf";
import "./navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav id="nav-menu">
      <div className="nav-container">
        <div className="logo">
          <h1>Hirak</h1>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <RxHamburgerMenu />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="#home" className="nav-link home">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link about">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link skills">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link projects">
                Projects
              </a>
            </li>
            <li>
              <a href="#github" className="nav-link github">
                GitHub
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link contact">
                Contact
              </a>
            </li>
            <li>
              <div
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1WD7xlHaL1jaj9l10QRfHtJiK_HxPmLSq/view?usp=share_link",
                    "_blank"
                  );
                }}
              >
                <a
                  id="resume-button-1"
                  className="nav-link resume"
                  href={CV}
                  download
                >
                  Resume
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
