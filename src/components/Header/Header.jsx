import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="header_left">
        <h1>
          Develop<span>er</span>
        </h1>
      </div>
      <div className="header_right">
        <Link to="home" smooth={true} duration={500}>
          <h4>Home</h4>
        </Link>
        {/* <Link to="about" smooth={true} duration={500}>
            <h4>About</h4>
          </Link> */}
        <Link to="skill" spy={true} smooth={true} offset={-70} duration={500}>
          <h4>Skill</h4>
        </Link>
        <Link to="project" smooth={true} duration={500}>
          <h4>Project</h4>
        </Link>
        <Link to="experience" smooth={true} duration={500}>
          <h4>Experience</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <h4>Contact</h4>
        </Link>
      </div>
      {/* <div className="header_rightBtn">
        <Link to="register" smooth={true} duration={500}>
          <h4 className="header_rightButton">Contact</h4>
        </Link>
      </div> */}
    </div>
  );
};

export default Header;