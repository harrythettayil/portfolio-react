import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="nav d-flex">
      <div className="nav-links d-flex">
        <a href="#banner">Home</a>
        <a href="#projects">Projects</a>
        <a href="#footer">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
