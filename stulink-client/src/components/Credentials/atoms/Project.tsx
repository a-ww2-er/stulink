type ProjectProps = {
  title: string;
};
import { IoMdArrowForward } from "react-icons/io";
import "../credentials.scss";
const Project = ({ title }: ProjectProps) => {
  return (
    <div className="projects">
      <div>
        <img
          src="https://fastly.picsum.photos/id/505/100/100.jpg?hmac=7ToFv6qETrqExA1jjSD7WQcSSIX3HI470eMKa2byx_g"
          alt="Collaborators"
        />
        <img
          src="https://fastly.picsum.photos/id/505/100/100.jpg?hmac=7ToFv6qETrqExA1jjSD7WQcSSIX3HI470eMKa2byx_g"
          alt="Collaborators"
        />
        <img
          src="https://fastly.picsum.photos/id/505/100/100.jpg?hmac=7ToFv6qETrqExA1jjSD7WQcSSIX3HI470eMKa2byx_g"
          alt="Collaborators"
        />
        <span> +3</span>
      </div>
      <h2>{title}</h2>
      <IoMdArrowForward />
    </div>
  );
};

export default Project;
