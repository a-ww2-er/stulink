import { images } from "../../../images";

const UserProject = () => {
  return (
    <div className="user_project">
      <img src={images(200, 200, 1)} alt="Random Image" />
      <h2>Medicine Students Test</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea adipisci
        impedit sed quos hic omnis numquam debitis exercitationem a consequatur?
      </p>
    </div>
  );
};

export default UserProject;
