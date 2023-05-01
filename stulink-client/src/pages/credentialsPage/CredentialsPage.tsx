import ActiveProjects from "../../components/Credentials/molecules/ActiveProjects";
import Documents from "../../components/Credentials/molecules/Documents";
import NewsForYou from "../../components/Dashboard/molecules/NewsForYou";
import ProjectHistory from "../../components/Dashboard/molecules/ProjectHistory";
import "./credentialstyles.scss";
import React from "react";
const CredentialsPage = () => {
  return (
    <div className="credentials">
      <div className="credentials_header">
        <span>
          <h1>Credentials</h1>
          <p>Viewing all your uploaded documents and projects</p>
        </span>
        <button>UPLOAD</button>
      </div>
      <div className="credentials_main">
        <Documents /> <NewsForYou />
      </div>

      <ActiveProjects />
      <ProjectHistory />
    </div>
  );
};

export default CredentialsPage;
