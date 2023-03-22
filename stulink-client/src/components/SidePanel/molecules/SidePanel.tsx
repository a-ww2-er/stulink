import "../styles/sidepanel.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { TfiHeadphoneAlt } from "react-icons/tfi";


const SidePanel = () => {
  return (
    <nav className="container">
      <CgProfile className="profile_photo" />
      <hr />
      <ul>
        <li>
          <Link to="/user">
            <IoMdPerson />
          </Link>
        </li>
        <li>
          <Link to="/general">
            <FaGlobeAmericas />
          </Link>
        </li>
        <li>
          <Link to="/analytics">
            <AiOutlineBarChart />
          </Link>
        </li>
      </ul>

      <hr />
      <Link to="/settings">
        <FiSettings />
      </Link>

      <Link to="/voice">
        <TfiHeadphoneAlt />
      </Link>
    </nav>
  );
};

export default SidePanel;
