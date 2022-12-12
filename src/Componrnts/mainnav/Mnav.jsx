
import React, { useState, useEffect } from "react";
import "./mnav.css";
import {GiHamburgerMenu} from "react-icons/gi"
const Mnav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);

  return (
    <footer>
      <a href="#" className="footer__logo">
        Hirak
      </a>
      {(toggleMenu || screenWidth > 500) && (
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
      )}

    
      <button onClick={toggleNav} className="btnnav">
      <GiHamburgerMenu/>
      </button>
    </footer>
  );
};

export default Mnav;
