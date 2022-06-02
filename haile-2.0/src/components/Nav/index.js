import React from "react";
import resume from "../../assets/documents/resume.pdf";

function Nav({ isOpen, setIsOpen }) {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <a href="#about">
          <img src="d" alt="logo" />
        </a>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
