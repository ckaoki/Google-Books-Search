// Import react
import React from "react";
// Import css style sheet
import "./style.css";

// Define Jumbotron component with attributes
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

export default Jumbotron;
