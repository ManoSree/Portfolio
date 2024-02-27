import React from "react";
import Header from "./components/Header/Header";
import TopContainer from "./components/TopContainer/TopContainer";
import Skill from "./components/Skill/SkillContainer";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";


const App = () => {
  return (
    <div>
      <Header />
      <TopContainer />
      <Skill />
      <ProjectContainer />
      <Experience/>
      <Contact/>
      
    </div>
  );
};

export default App;