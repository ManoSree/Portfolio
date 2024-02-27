import React from "react";
import { Element } from "react-scroll";
import "./SkillContainer.css";
import { LinearProgress } from "@mui/material";
import skillImage from "../../assets/skill-img.jpg";



const SkillContainer = () => {
  return (
    <div className="skill">
      <h1>Skills</h1>
      <Element className="skillcontainer" id="skills">
        <div className="skillcontainer_image">
          <img src={skillImage} alt="Description of skill" />
        </div>
        <div className="skillcontainer_text">
          <h2>SKILLSET</h2>
          <div className="skillcontainer_skillset">
            <h3>React</h3>
            <div className="skillcontainer_slider1">
              <LinearProgress variant="determinate" value={95} />
            </div>
          </div>
          <div className="skillcontainer_skillset">
            <h3>Django</h3>
            <div className="skillcontainer_slider2">
              <LinearProgress variant="determinate" value={85} />
            </div>
          </div>
          <div className="skillcontainer_skillset">
            <h3>Python</h3>
            <div className="skillcontainer_slider3">
              <LinearProgress variant="determinate" value={76} />
            </div>
          </div>
          <div className="skillcontainer_skillset">
            <h3>MySQL</h3>
            <div className="skillcontainer_slider4">
              <LinearProgress variant="determinate" value={90} />
            </div>
          </div>
          <div className="skillcontainer_skillset">
            <h3>Talwind CSS</h3>
            <div className="skillcontainer_slider5">
              <LinearProgress variant="determinate" value={65} />
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default SkillContainer;
