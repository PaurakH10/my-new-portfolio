// src/components/Projects.js
import React from "react";
function Projects() {
  // Array of projects
  const projectData = [
    {
      title: "UI/UX Design",
      description: "I create designs that look good and are easy for people to use.",
    },
    {
      title: "DBMS",
      description: "I organize and manage data so it can be stored and used properly.",
    },
    {
      title: "Website Development",
      description: "I build websites that work well on different devices.",
    },
    {
      title: "Wordpress",
      description: "I make and customize websites using WordPress tools and themes.",
    },
    {
      title:"Figma",
      description: "I design and share website or app layouts using Figma.",
    }
  ];
  return (
    <section className="projects" id="Services">
      <h2>My <span>Services</span></h2>
      <div className="project-list">
        {/* Loop through projectData using .map() */}
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      
    </section>
    
  );
}
export default Projects;