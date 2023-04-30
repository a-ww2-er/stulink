import { AiOutlineFilePdf } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import "../styles/credentials.scss";

type DocumentProps = {
  status: string;
  title: string;
  date: string;
};

const Document = ({ status, title, date }: DocumentProps) => {
  return (
    <div className="document">
      <div>
        <AiOutlineFilePdf />
        <span>
          <h3>{title}</h3>
          <span>{date}</span>
        </span>
        <span className="document_status" >{status}</span>
      </div>

      <button>
        <MdOutlineDelete />
        DELETE
      </button>
    </div>
  );
};

export default Document;
