import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { BsBell } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";
const Nav = () => {
  const notification = "22+";

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "");

  return (
    <nav className="nav">
      <div className="nav_container">
        <h2>
          {currentUser.firstname
            ? `${currentUser.firstname} ${currentUser.lastname} `
            : "Joe Davidson"}
        </h2>
        <ul>
          <li>
            <NavLink className="navlink" to={`/dashboard/${"123"}/projects`}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to={`/dashboard/${"123"}/bio`}>
              Bio
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to={`/dashboard/${"123"}/credentials`}>
              Credentials
            </NavLink>
          </li>
        </ul>
        <div>
          <section className="search_bar">
            <input type="text" placeholder="Search Users" />
            <IoIosSearch />
          </section>
          <GiSettingsKnobs />
          <section className="notification">
            <BsBell />
            <span>{notification}</span>
          </section>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
