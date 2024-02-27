// Experience.jsx
import React from 'react';
import { Element } from 'react-scroll';
import './Experience.css';
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer';

const Experience = () => {
  const experienceStyles = { backgroundColor: "#f64c08" }; // Define any specific styles you want to apply to an ExperienceItem

  return (
    
        
      <Element className='exp-container' id='exp'>
        <h1>Experience</h1>
        <div className='exp-container-info'>
          <ExperienceContainer number="+10" title="Clients" />
          <ExperienceContainer number="+20" title="Projects" style={experienceStyles} />
          <ExperienceContainer number="+30" title="Years of Service" />
          <ExperienceContainer number="+40" title="Awards Won" />
        </div>
      </Element>

  );
};

export default Experience;
