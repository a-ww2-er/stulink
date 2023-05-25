import PreviousProject from "../atoms/PreviousProject";
// import "../styles/dashboard.scss"
const ProjectHistory = () => {
  return (
    <div className="project_history">
      <div className="project_container">
        <h2>Project History</h2>
        <div className="project_history_projects">
          <PreviousProject number={"01"} date={"03/3/2022"} title={"How to PM packaged goods"} />
          <hr />
          <PreviousProject number={"02"} date={"19/3/2022"} title={"Standards of data analysis"} />
          <hr />
          <PreviousProject number={"03"} date={"09/5/2022"} title={"How to manage developers goods"} />
          <hr />
          <PreviousProject number={"04"} date={"09/1/2023"} title={"Working with HTML in 2023"} />
          <hr />
          <PreviousProject number={"05"} date={"12/2/2023"} title={"A better way to access students grade"} />
          <hr />
          <PreviousProject number={"06"} date={"03/3/2023"} title={"How to PM packaged goods"} />
        </div>
      </div>
    </div>
  );
};

export default ProjectHistory;
