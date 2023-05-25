import React from "react";
import logo from "../../../Assets/stulink-logo-2.png";
import { Link } from "react-router-dom";
import "../styles.scss";

const Navbar = ({ onclick }: any) => {
  //ideally this would be stored on our database but for now
  //lets leave it here
  const NavBar = [
    { id: 0, link: "Home" },
    { id: 1, link: "Community" },
    { id: 2, link: "Explore" },
    { id: 3, link: "News" },
    { id: 4, class: "support_btn", link: "Support" },
  ];
  return (
    <nav className="authentication_page_navbar">
      <div className="navbar_container">
        <ul>
          <li>
            <img src={logo} alt="Stulink.png" />
          </li>
          {NavBar.map((items) => {
            return (
              <li
                key={items.id}
                className={items.class ? items.class : ""}
                onClick={onclick}
              >
                <Link to="#">{items.link}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
