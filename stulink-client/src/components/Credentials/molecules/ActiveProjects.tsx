import Project from "./../atoms/Project";
import "../styles/credentials.scss"
import React from "react";

const ActiveProjects = () => {
  return (
    <div className="active_projects">
      <div className="active_projects_header">
        <span>3</span> <h1>Active Projects</h1>
      </div>

      <div className="active_projects_container">
        <Project title="Fundamentals of Data Analysis" />
        <Project title="Fundamentals of Data Analysis" />
        <Project title="Fundamentals of Data Analysis" />
      </div>
    </div>
  );
};

export default ActiveProjects;
