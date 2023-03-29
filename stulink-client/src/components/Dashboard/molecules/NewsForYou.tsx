import { IoMenuOutline } from "react-icons/io5";
import News from "../atoms/News";
// import "../styles/dashboard.scss";

const NewsForYou = () => {
  return (
    <div className="news_for_you">
      <div className="news_for_you_title">
        <h2>News For You</h2> <IoMenuOutline />
      </div>

      <div className="news_for_you_articles">
        <News classname="news" image={2} />
        <News classname="news" image={4}/>
        <News classname="news" image={5}/>
      </div>
    </div>
  );
};

export default NewsForYou;
