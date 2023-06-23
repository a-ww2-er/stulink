import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

type typeprop = {
  image: string;
  name: string;
  dept: string;
};

const Member = ({ image, name, dept }: typeprop) => {
  return (
    <div className="member">
      <div>
        <img src={image} alt={"profile photo"} />
        <span >  <h3>{name}</h3> <p>{dept}</p></span>
      </div>
      <div>
       {" "}
        <Link to={"#"} className="member_message">
          Message
        </Link>
      </div>
    </div>
  );
};

export default Member;
