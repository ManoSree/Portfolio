import React from 'react'
import { Link } from 'react-scroll'
import './TopConetent.css';


const TopContent = () => {
  return (
    <div className='topcontent'>
        <div className="topcontent_container">
            <h1>Front-End Software Developer</h1>
            <p>Building smart user interface
                and developing rich web application and 
                seamless web experience.
            </p>
            <a href="www.google.com">
                <button className='topcontent_downloadbtn'>Resume</button>
            </a>

            <Link to="project" smooth={true} duration={500}>
                <button className='topcontent_workbtn'>My Work</button>
            </Link>
        </div>
      
    </div>
  )
}

export default TopContent