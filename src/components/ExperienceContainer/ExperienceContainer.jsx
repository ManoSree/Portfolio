// ExperienceItem.jsx
import React from 'react';
import './ExperienceContainer.css'

const ExperienceContainer = ({ number, title, style }) => {
  return (
    <div className="experience" style={{ ...style }}>
      <h1>{number}</h1>
      <p>{title}</p>
    </div>
  );
};

export default ExperienceContainer;
