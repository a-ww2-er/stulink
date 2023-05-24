import ChangePassword from "../../components/Bio/molecules/ChangePassword";
import OccupationalDetails from "../../components/Bio/molecules/OccupationalDetails";
import PersonalData from "../../components/Bio/molecules/PersonalData";
import Profile from "../../components/Bio/molecules/Profile";
import SchoolDetails from "../../components/Bio/molecules/SchoolDetails";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./biopage.scss";
import { Helmet } from "react-helmet-async";

const Bio = () => {
  return (
    <div className="bio">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bio</title>
      </Helmet>
      <section className="profile_container">
        <Profile />
        <button>Save Changes</button>
      </section>

      <section>
        <PersonalData />
      </section>

      <section>
        <h1>Occupational Details</h1>
        <OccupationalDetails />
      </section>

      <section>
        <h1>School Details</h1>
        <SchoolDetails />
      </section>

      <section>
        <h1>
          Change Password <AiOutlineInfoCircle />{" "}
        </h1>
        <ChangePassword />
      </section>

      <button className="delete_button">
        Delete My Account
        <AiOutlineInfoCircle />{" "}
      </button>
    </div>
  );
};

export default Bio;
