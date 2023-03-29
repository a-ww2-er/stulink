import "./sidepanel.scss";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import smallLogo from "../../Assets/stulink-logo-2.png";
import pfp from "../../Assets/pfp1.png";

const SidePanel = () => {
  return (
    <nav className="container">
      <ul>
        <li>
         <Link to={"/"} ><img src={smallLogo} alt="" /></Link>
        </li>

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
    </nav>
  );
};

export default SidePanel;
