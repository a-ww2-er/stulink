import Project from "./../atoms/Project";
import "../styles/credentials.scss";
import { useContext } from "react";
import { MockUserData } from "../../../context/MockData";
const ActiveProjects = () => {
  const mockData: any = useContext(MockUserData);
  return (
    <div className="active_projects">
      <div className="active_projects_header">
        <span>{mockData.projects.length}</span> <h1>Active Projects</h1>
      </div>

      <div className="active_projects_container">
        {mockData.projects.map((project: any) => {
          return (
            <Project key={project.user_id}
              title={project.project_name}
              img_url={project.Project_image}
            />
          );
        })}
      </div>
    </div>
  );
};

{
  /* <Project title="Fundamentals of Data Analysis" />
<Project title="Fundamentals of Data Analysis" />
<Project title="Fundamentals of Data Analysis" /> */
}
export default ActiveProjects;
