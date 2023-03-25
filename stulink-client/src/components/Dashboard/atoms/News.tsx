import src from "../../../Assets/sunrise-1014712__340.jpg";

type NewsProps = {
  title?: string;
  date?: string;
  description?: string;
  url?: string;
  image?: string;
  classname: string;
};
const News = ({ classname }: NewsProps) => {
  return (
    <div>
      <img src={src} alt={src} />
      <h3>Mark Wesley returns</h3>
      <p>
        Read the epic story of an icon returning from the past to the future and
        to save a whole world from anniliation.
      </p>
    </div>
  );
};

export default News;
