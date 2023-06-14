import { images } from "../../../images";
import Member from "../atoms/Member";

import { IoPersonAdd, IoPersonRemoveSharp } from "react-icons/io5";

import { Link } from "react-router-dom";
import Recommended from "../atoms/Recommended";

const Team = () => {
  return (
    <div className="team_container">
      <div className="team">
        <h2>Team</h2>
        <section>
          <Member
            dept={"Political Science"}
            image={images(140, 80, false, 92)}
            name={"Jackson Mat"}
          />
          <Member
            dept={"Chemical Eng"}
            image={images(180, 120, false, 17)}
            name={"Olivia Jack"}
          />
          <Member
            dept={"Computer Science"}
            image={images(140, 80, false, 30)}
            name={"Hudson Lilman"}
          />
          <Member
            dept={"Data Analysis"}
            image={images(140, 80, false, 59)}
            name={"Sarah Mattew"}
          />
          <Member
            dept={"Biology"}
            image={images(140, 80, false, 8)}
            name={"Jock Ray"}
          />
        </section>
        <Link to="#" className="icon">
          <IoPersonAdd />
          <IoPersonRemoveSharp />
        </Link>
      </div>
      <section className="recommended">
        <span className="recommended_heading">
          <h3>Recommended</h3> <p>More</p>{" "}
        </span>
        <Recommended
          name={"Anna markson"}
          dept={"Architecture"}
          image={images(140, 80, false,242)}
        />
        <Recommended
          name={"Rayd"}
          dept={"Computer Science"}
          image={images(140, 80, false, 168)}
        />
        <Recommended
          name={"Tough92"}
          dept={"Medcine"}
          image={images(140, 80, false,63)}
        />
        <Recommended
          name={"gennis tom"}
          dept={"Biology"}
          image={images(140, 80, false, 38)}
        />
      
      </section>
    </div>
  );
};

export default Team;
