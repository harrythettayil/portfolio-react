import React from "react";
import exp from "./exp";
import "./experience.css";
import ExperienceItem from "./expItem/expItem";

function Experience() {
  return (
    <div className="container">
      <h2 className="mb-3">Experience</h2>
      <div className="exp-grid">
        {exp.map((ex, index) => (
          <ExperienceItem key={index} title={ex.title} time={ex.time} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
