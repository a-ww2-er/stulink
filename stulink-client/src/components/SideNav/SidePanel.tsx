import "./sidepanel.scss";
import { useState, useEffect, useContext } from "react";
import { Link, NavLink, useLocation, useRoutes } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import smallLogo from "../../Assets/stulink-logo-2.png";
import pfp from "../../Assets/pfp1.png";
import { BiArrowBack, BiArrowFromLeft } from "react-icons/bi";
import { AppContext } from "../../utilities/context";

const SidePanel = () => {
  const {pathname}= useLocation();


  const { setCloseSidePanel, closeSidePanel } = useContext(AppContext);
  function handleClick() {
    setCloseSidePanel(!closeSidePanel);
  }
  return (
    <nav className={closeSidePanel ? "minimized_container" : "container"}>
      <div>
        <BiArrowBack onClick={handleClick} />
        <Link to={"/"}>
          <img src={smallLogo} alt="" />
        </Link>
        <hr />
        <article className="breadcrumbs"> {pathname} </article>
        <hr />
        <ul>
          <li>
            <NavLink to="/">
              <FaGlobeAmericas />
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard`}>
              <IoMdPerson />
            </NavLink>
          </li>
          <li>
            <NavLink to="/bio">
              <AiOutlineBarChart />
            </NavLink>
          </li>
          <li>
            <NavLink to="/bio">
              <FiSettings />
            </NavLink>
          </li>
          <li>
            <NavLink to="/support">
              <TfiHeadphoneAlt />
            </NavLink>
          </li>
        </ul>
        <div>
          <img src={pfp} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default SidePanel;
