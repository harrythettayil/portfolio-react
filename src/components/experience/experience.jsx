import React from "react";
import exp from "./exp";
import "./experience.css"

function Experience(){
    return (
        <div className="container">
      <h2 className="mb-3">Experience</h2>
      <div className="exp-grid">
      {exp.map((ex, index) => (
        <div key={index} className="exp-box bg-color">
          <h5>{ex.title}</h5>
          <p className="third-color">{ex.time}</p>
        </div>
       ))}
      </div>
    </div>
    )
}

export default Experience;