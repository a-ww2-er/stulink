import PreviousProject from "../atoms/PreviousProject";
import "../styles/dashboard.scss"
const ProjectHistory = () => {
  return (
    <div className="project_history">
      <h2>Project History</h2>
      <div className="project_history_projects">
        <PreviousProject />
        <hr />
        <PreviousProject />
        <hr />
        <PreviousProject />
        <hr />
        <PreviousProject />
        <hr />
        <PreviousProject />
        <hr />
        <PreviousProject />
      </div>
    </div>
  );
};

export default ProjectHistory;
