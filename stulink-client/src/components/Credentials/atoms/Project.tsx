type ProjectProps = {
  title: string;
  img_url: string;
  key: string
};
import { IoMdArrowForward } from "react-icons/io";
import "../styles/credentials.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Project = ({ title, img_url, key }: ProjectProps) => {
  return (
    <div className="project">
      <div key={key}>
        <LazyLoadImage src={img_url} alt="Active Project Image" />
        <LazyLoadImage src={img_url} alt="Active Project Image" />
        <LazyLoadImage src={img_url} alt="Active Project Image" />
        <span> +3</span>
      </div>
      <h2>{title}</h2>
      <IoMdArrowForward />
    </div>
  );
};

export default Project;
