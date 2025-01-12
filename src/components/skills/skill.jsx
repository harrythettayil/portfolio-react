import React from "react";
import "./skill.css";
import skills from "./skills";
import SkillItem from "./skillItem/skillItem";

function Skill() {
  return (
    <div className="container">
      <h2 className="mb-3">Skills</h2>
      <div className="d-flex tool-container">
        {skills.map((skill, index) => (
          <SkillItem key={index} img={skill.img} title={skill.title} />
        ))}
      </div>
    </div>
  );
}

export default Skill;
