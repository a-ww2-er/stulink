import { MdOutlineDelete } from "react-icons/md";
import "../credentials.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

type DocumentProps = {
  status: string;
  title: string;
  date: string;
};

const Document = ({ status, title, date }: DocumentProps) => {
  return (
    <div className="document">
      <div>
        <LazyLoadImage src={img_url} alt={img_url} />
        <span>
          <h3>{title}</h3>
          <span>{date}</span>
        </span>
        <span className="document_status">{status}</span>
      </div>

      <button>
        <MdOutlineDelete />
        DELETE
      </button>
    </div>
  );
};

export default Document;
