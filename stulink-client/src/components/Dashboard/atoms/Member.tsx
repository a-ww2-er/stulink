import { CgProfile } from "react-icons/cg";

const Member = () => {
  return (
    <div className="member">
      <div>
       <CgProfile/>
        <h3>Janet Francis</h3>
      </div>
      <div>
        <button className="member_department">Cyber</button> <button className="member_message">Message</button>
      </div>
    </div>
  );
};

export default Member;
