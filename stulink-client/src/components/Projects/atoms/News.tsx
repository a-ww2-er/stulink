import { Link } from "react-router-dom";
import { images } from "../../../images";
import { LazyLoadImage } from "react-lazy-load-image-component";

type NewsProps = {
  title?: string;
  date?: string;
  description?: string;
  url?: string;
  image: number | boolean;
  classname: string;
};
const News = ({ classname, image }: NewsProps) => {
  return (
    <Link to="#" className="news_link">
      <LazyLoadImage src={images(800, 400, image)} alt="newsimg" />
      <section>
        <h3>Mark Wesley returns</h3>
        <p>
          Read the epic story of an icon returning from the past to the future
          and to save a whole world from anniliation.
        </p>
      </section>
    </Link>
  );
};

export default News;
