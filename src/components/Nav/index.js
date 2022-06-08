import React, { useState } from "react";
import resume from "../../assets/documents/resume.pdf";


function Nav() {
  const [section, setSection] = useState('About')
 
  return (
    <nav className="nav">
      <div className="nav-links">
        <ul>
          <li>
            <a className={section === 'About' && 'nav-active'} onClick={()=>{setSection('About')}} href="#about">About</a>
          </li>
          <li>
            <a className={section === 'Work' && 'nav-active'} onClick={()=>{setSection('Work')}}href="#work">Work</a>
          </li>
          <li>
            <a className={section === 'Contact' && 'nav-active'} onClick={()=>{setSection('Contact')}}href="#contact">Contact</a>
          </li>
          <li>
            <div className="nav-resume">
                <a href={resume} target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    );
}

export default Nav;
