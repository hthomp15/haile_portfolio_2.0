import React, { useState } from "react";
import resume from "../../assets/documents/haile-thompson-resume.pdf";
import { Link } from "react-router-dom";

function Nav() {
  const [section, setSection] = useState("About");

  return (
    <nav className="nav">
      <div className="nav-links">
        <ul>
          <li>
            <Link
              to="/haile_portfolio_2.0"
              className={section === "About" ? "nav-active" : null}
              onClick={() => {
                setSection("About");
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="haile_portfolio_2.0/work"
              className={section === "Work" ? "nav-active" : null}
              onClick={() => {
                setSection("Work");
              }}
            >
              Work
            </Link>
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
