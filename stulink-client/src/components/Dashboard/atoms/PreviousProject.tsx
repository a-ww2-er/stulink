import { CgProfile } from "react-icons/cg";
import { images } from "../../../images";

type typeprops={
  number:string,
  title:string,
  date:string
}

const PreviousProject = ({number,title,date}:typeprops) => {
  return (
    <div className="previous_project">
      <span>{number}</span>
      <div className="previous_project_details">
        <section>
        <img src={images(140,80,false,235)} alt="pfp" />
        <img src={images(140,80,false,233)} alt="pfp" />
        <img src={images(140,80,false,225)} alt="pfp" />
        <img src={images(140,80,false,215)} alt="pfp" />
      
     
        </section>
        <div>
          <h3>{title}</h3>
          <p>two departments co-up project</p>
        </div>
      </div>

      <span>{date}</span>
    </div>
  );
};

export default PreviousProject;
