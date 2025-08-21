import React from "react";
import "./About.css";
const About = () => {
  return (
    <section className="about" id="About">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://ih1.redbubble.net/image.5663203833.2608/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
            alt="Profile"
          />
        </div>
        <div className="about-content">
          <h2>About <span>Me</span></h2>
          <p>
            Hi! I'm Paurakh Bhandari 👋, a passionate web developer and computer instructor.
            I love building web applications using <strong>React.js</strong>,
            experimenting with new technologies, and teaching students how to code.
          </p>
          <p>
            My goal is to keep improving my skills while helping others
            understand programming in the simplest way possible 🚀.
          </p>
          <a href="#projects" id="Projects" className="btn-primary">See My Projects</a>
        </div>
      </div>
    </section>
  );
};
export default About;