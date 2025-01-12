import React from "react";
import "./project.css";
import projects from "./projects";
import ProjectItem from "./projectItem/projectItem";

function Project() {
  return (
    <div className="container projects">
      <h2 className="mb-3">Projects</h2>
      <div className="d-flex">
        {projects.map((project, index) => (
          <ProjectItem 
            key={index} 
            href={project.href} 
            img={project.img} 
            title={project.title} 
            tools={project.tools} 
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
