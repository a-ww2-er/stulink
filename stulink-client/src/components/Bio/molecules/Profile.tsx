import { CgProfile } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile_picture">
        <CgProfile />
      </div>
      <span className="profile_name">
        <p>Joey 2002</p> <FiEdit />
      </span>
      <p>JoeDavidson@yahoo.uk</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit deleniti
        accusamus, ducimus tempore voluptates deserunt quisquam corrupti? Ab,
        vitae quos!
      </p>
    </div>
  );
};

export default Profile;
