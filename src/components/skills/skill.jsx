import React from "react";
import "./skill.css";
import skills from "./skills";

function Skill() {
  return (
    <div className="container">
      <h2 className="mb-3">Projects</h2>
      <div className="d-flex tool-container">
      {skills.map((skill, index) => (
            <div key={index} className="tool-box text-center">
              <img className="tool-img" src={skill.img} alt={skill.title} loading="lazy"/>
              <h5>{skill.title}</h5>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
