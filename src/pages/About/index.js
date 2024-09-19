import React from "react";
import photo from "../../assets/images/about-me/img-1.jpeg";

function About() {
  return (
    <section className="opacity-85 mt-5 about-me" id="about">
      <div className="about-me-container">
        <h2 className="">About Me</h2>
        <div className="about-me-photo">
          <img src={photo} alt="portrait of Haile" />
        </div>
        <div className="about-me-text md:pt-40">
          <p>
            I'm a software engineer at an early-stage startup. I live in
            Brooklyn, New York, with my wife and two cats. I love biking,
            hiking, and am an avid One Piece fan. Thanks for checking out my
            page!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
