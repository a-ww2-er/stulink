import { GiHamburgerMenu } from "react-icons/gi";
import News from "../atoms/News";
import "../styles/dashboard.scss";

const NewsForYou = () => {
  return (
    <div className="news_for_you">
      <div className="news_for_you_title">
        <h2>News For You</h2> <GiHamburgerMenu />
      </div>

      <div className="news_for_you_articles">
        <News classname="news" />
        <News classname="news" />
        <News classname="news" />
      </div>
    </div>
  );
};

export default NewsForYou;
