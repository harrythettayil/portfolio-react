import React from "react";
import "./project.css";
import projects from "./projects";
import arrow from "../../assets/images/arrow-up-right.svg";

function Project() {
  return (
    <div className="container projects">
      <h2 className="mb-3">Projects</h2>
      <div className="d-flex">
      {projects.map((project, index) => (
            <a key={index} className="project" href={project.href} target="_blank">
              <div className="project-box">
                <img className="project-img" src={project.img} alt={project.title} loading="lazy"/>
                <div className="d-flex project-details">
                    <div>
                      <h5 className="mb-1">{project.title}</h5>
                      <p className="third-color">{project.tools}</p>
                    </div>
                    <img className="arrow" src={arrow} alt="arrow" />
                </div>
              </div>
            </a>
        ))}
      </div>
    </div>
  );
}

export default Project;
