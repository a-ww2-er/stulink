import { FiEdit } from "react-icons/fi";
import { useContext } from "react";
import { MockUserData } from "../../../utilities/context/MockData";
const Profile = () => {
  const mockData: any = useContext(MockUserData);
  
  return (
    <div className="profile">
      <div className="profile_picture">
        <img src={mockData.ProfilePhoto} alt="User profile image" />
      </div>
      <span className="profile_name">
        <p>{` ${mockData.FirstName} 2002`} </p> <FiEdit />
      </span>
      <p>{`${mockData.Email}`}</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit deleniti
        accusamus, ducimus tempore voluptates deserunt quisquam corrupti? Ab,
        vitae quos!
      </p>
    </div>
  );
};

export default Profile;
