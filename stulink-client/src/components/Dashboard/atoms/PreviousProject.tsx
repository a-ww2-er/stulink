import { CgProfile } from "react-icons/cg";

const PreviousProject = () => {
  return (
    <div className="previous_project">
      <span>01</span>
      <div className="previous_project_details">
        <div>
          <CgProfile />
          <CgProfile />
          <CgProfile />
          <CgProfile />
        </div>
        <div>
          <h3>Standards of Data Analysis</h3>
          <p>two departments co-up project</p>
        </div>
      </div>

      <span>02/19/2022</span>
    </div>
  );
};

export default PreviousProject;
