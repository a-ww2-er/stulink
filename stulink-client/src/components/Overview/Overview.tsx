import { NavLink } from "react-router-dom";
import "./overview.scss";
import UserProject from "./atoms/UserProject";
import UserPost from "./atoms/UserPost";
import Nav from "../NavBar/Nav";
import img from "../../Assets/elijah-hiett-umfpFoKxIVg-unsplash-removebg.png";
import News from "../Dashboard/atoms/News";

const Overview = () => {
  return (
    <div className="overview">
      <Nav />
      <section className="overview_dashboard">
        <div className="overview_dashboard_left">
          <h1>
            Stu<span className="stulink">Link</span> Dashboard
          </h1>
          <h2>Hi, Joe Davidson,</h2>
          <p> ~ A sun may set but it will always rise, keep going</p>

          <div className="overview_dashboard_left_container">
            <div className="overview_projects">
              <span>19</span>
              <p>Projects</p>
            </div>
            <hr />
            <div className="overview_posts">
              <span>244</span>
              <p>Posts</p>
            </div>
            <hr />

            <div className="overview_stars">
              <span>300</span> <p>Stars</p>
            </div>
          </div>
        </div>

        <img src={img} alt="Random Image" />
      </section>

      <nav className="library_history_nav">
        <ul>
          <li>
            <NavLink to="">My Library</NavLink>
          </li>
          <li>
            <NavLink to="/overview/history">History</NavLink>
          </li>
        </ul>
        <hr />
      </nav>

      <section className="library_and_history">
        {/* Projects and News */}
        <div className="library_grid">
          <UserPost />
          <News image={0} classname="user_news" />
          <News image={0} classname="user_news" />
          <News image={0} classname="user_news" />
          <UserProject />
          <UserProject />
          <UserPost />
          <UserProject />
          <UserProject />
          <UserProject />
          <UserProject />
          <UserPost />
          <News image={0} classname="user_news" />
          <News image={0} classname="user_news" />
          <News image={0} classname="user_news" />
        </div>
      </section>

      <section className="featured_posts_container">
        {/* Posts */}
        <h1>Featured Posts</h1>
        <hr />

        <div className="featured_posts">
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
        </div>
      </section>
    </div>
  );
};

export default Overview;
