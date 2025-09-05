// src/components/Projects.js
import React, { useEffect, useRef, useState } from "react";

function Projects() {
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

  const projectData = [
    {
      title: "UI/UX Design",
      description: "I create designs that look good and are easy for people to use.",
      icon: "ri-palette-line",
    },
    {
      title: "DBMS",
      description: "I organize and manage data so it can be stored and used properly.",
      icon: "ri-database-2-line",
    },
    {
      title: "Website Development",
      description: "I build websites that work well on different devices.",
      icon: "ri-code-box-line",
    },
    {
      title: "WordPress",
      description: "I make and customize websites using WordPress tools and themes.",
      icon: "ri-wordpress-line",
    },
    {
      title: "Mobile App UI Design",
      description: "I design sleek and intuitive user interfaces optimized for mobile devices.",
      icon: "ri-smartphone-line",
    },
    {
      title: "Deployment & Hosting",
      description: "I deploy websites and apps to platforms like Netlify, Vercel, or Firebase for reliable hosting.",
      icon: "ri-cloud-line",
    },
  ];

  return (
    <section ref={ref} className={`projects fadeInLeft ${visible ? 'visible' : ''}`} id="Services">
      <h2>My <span>Services</span></h2>
      <div className="project-list">
        {projectData.map((project) => (
          <div className="project-card" key={project.title}>
            <i className={`project-icon ${project.icon}`}></i>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
