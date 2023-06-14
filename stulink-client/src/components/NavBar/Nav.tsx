import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { BsBell } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";
import { AppContext } from "../../utilities/context";
import { useContext } from "react";
import { MockUserData } from "../../utilities/context/MockData";
const Nav = () => {
  const { modalOpen, setModalOpen, setCloseSidePanel, closeSidePanel } =
  useContext(AppContext);
  const notification = "22+";
  let currentUser:any = {}
  try {
    currentUser = JSON.parse(localStorage.getItem("currentUser") || "");
  } catch (error) {
    console.log(error);
  }
  
  const mockData: any = useContext(MockUserData);
  return (
    <nav className={
      !closeSidePanel
        ? "nav"
        : `nav openSideNav`
    }>
      <div className="nav_container">
        <h2> {currentUser.userName
              ? `${currentUser.firstName} ${currentUser.lastName}`
              : "Joe Davidson"}</h2>
        <ul>
          <li>
            <NavLink className="navlink" to={`/dashboard/projects`}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to={`/dashboard/bio`}>
              Bio
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to={`/dashboard/credentials`}>
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
