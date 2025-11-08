import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const About = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "UI/UX Design", level: 85 },
    { name: "Web Development", level: 90 },
    { name: "React.js", level: 80 },
    { name: "Database Management", level: 75 }
  ];

  return (
    <section ref={ref} className={`about ${visible ? 'visible' : ''}`} id="About">
      <div className="about-container">
        <div className="about-left">
          <div className="about-image-wrapper">
            <div className="image-decoration"></div>
            <img
              src="https://ih1.redbubble.net/image.5663203833.2608/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
              alt="Profile"
              className="about-img"
            />
            <div className="image-badge">
              <i className="ri-code-s-slash-line"></i>
              <span>Developer</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-header">
            <span className="about-tag">Get To Know</span>
            <h2>About <span>Me</span></h2>
          </div>
          
          <div className="about-text">
            <p>
              Hi! I'm <strong>Paurakh Bhandari</strong> 👋, a passionate web developer and computer instructor.
              I love building web applications using <strong>React.js</strong>,
              experimenting with new technologies, and teaching students how to code.
            </p>
            <p>
              My goal is to keep improving my skills while helping others
              understand programming in the simplest way possible 🚀.
            </p>
          </div>

          <div className="skills-section">
            <h3>My Skills</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: visible ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-actions">
            <a href="#Projects" className="btn-primary">
              <span>View My Work</span>
              <i className="ri-arrow-right-line"></i>
            </a>
            <a href="#Contact" className="btn-secondary">
              <span>Get In Touch</span>
              <i className="ri-mail-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;