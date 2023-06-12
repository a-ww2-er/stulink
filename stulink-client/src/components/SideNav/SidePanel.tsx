import "./sidepanel.scss";
import { useState, useEffect, useContext } from "react";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useRoutes,
} from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import smallLogo from "../../Assets/Stulink-logo-min.png";
import bigLogo from "../../Assets/stulink-logo-2.png";
import pfp from "../../Assets/pfp1.png";
import { BiArrowBack, BiArrowFromLeft } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi";
import { AppContext } from "../../utilities/context";
import { AnimatePresence, motion } from "framer-motion";
import axiosRequest from "../../utilities/axiosRequest";

const SidePanel = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let currentUser: any = {};
  try {
    currentUser = JSON.parse(localStorage.getItem("currentUser") || "");
  } catch (error) {
    console.log(error);
  }
  const handleLogout = async () => {
    try {
      await axiosRequest.post("/auth/logout");
      localStorage.setItem("currentUser", "");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const sidebarAnimation = {
    // system view
    open: {
      width: "13rem",
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    closed: {
      width: "4.5rem",
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const { setCloseSidePanel, closeSidePanel } = useContext(AppContext);
  function handleClick() {
    setCloseSidePanel(!closeSidePanel);
  }
  return (
    <AnimatePresence initial={false}>
      <motion.nav
        variants={sidebarAnimation}
        animate={closeSidePanel ? "open" : "closed"}
        className={closeSidePanel ? "sideNav" : "closedSideNav"}
      >
        <div className="container">
          <div>
            <motion.section
              animate={
                !closeSidePanel
                  ? { x: 0, y: 0, rotate: 180 }
                  : { x: 0, y: 0, rotate: 0 }
              }
              transition={{ duration: 0.4 }}
            >
              <span onClick={handleClick}>{"<"}</span>
            </motion.section>
            <Link to={"/"} className="logo">
              <img src={!closeSidePanel ? smallLogo : bigLogo} alt="" />
            </Link>
            <article className="breadcrumbs">
              {" "}
              {pathname.replace("/", "").replace("/", " > ")}{" "}
            </article>
            <ul>
              <li>
                <NavLink to="/dashboard/bio" className="link">
                  <FaGlobeAmericas /> <p>Community</p>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/dashboard/projects`} className="link">
                  <IoMdPerson /> <p>Dashboard</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/biso" className="link">
                  <AiOutlineBarChart />
                  <p>Analytic</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/bio" className="link">
                  <FiSettings /> <p>Preferances</p>
                </NavLink>
              </li>
              {!closeSidePanel ? (
                <li>
                  <NavLink to="/support" className="link">
                    <TfiHeadphoneAlt />
                  </NavLink>
                </li>
              ) : (
                ""
              )}
            </ul>

            <div className="support">
              <div>
                <p>need help?</p>
                <span className="link">
                  contact Support <TfiHeadphoneAlt />
                </span>
              </div>
            </div>
          </div>

          <section>
            <img
              src={currentUser.profilePhoto ? currentUser.profilePhoto : pfp}
              alt=""
            />
            <p className="user_name">
              {currentUser.userName
                ? `${currentUser.firstName} ${currentUser.lastName}`
                : "Joe Davidson"}
            </p>
            <p className="email">
              <p>
                {" "}
                {currentUser.email
                  ? `${currentUser.email}`
                  : "JoeDavidson@gmail.com"}
              </p>
            </p>
          </section>
          <section className="log_out">
            <ul>
              <li className="link" onClick={handleLogout}>
                <BiArrowBack />
                <p>Logout</p>
              </li>
            </ul>
          </section>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default SidePanel;
