import "../styles/navbar.scss";
import { NavLink } from "react-router-dom";
import { BsBell } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";
const Nav = () => {
  return (
    <nav className="nav">
      <h2>Joe Davidson</h2>
      <ul>
        <li>
          <NavLink className="navlink" to="/user/projects" end>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/user/bio" end>
            Bio
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/user/credentials">Credentials</NavLink>
        </li>
      </ul>

      <div>
        <div>
          <input type="text" placeholder="Search Users" />
          <IoIosSearch />
        </div>
        <GiSettingsKnobs />
      </div>
      <BsBell />
    </nav>
  );
};

export default Nav;
