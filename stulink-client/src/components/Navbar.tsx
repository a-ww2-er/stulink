import { Key } from "react";
import logo from "../Assets/stulink-logo-2.png";
import { Link } from "react-router-dom";

type NavbarTypes = {
  onclick: () => void;
  page: String;
  navBarLinks: {
    id: Key | null;
    class?: string | undefined;
    link: String;
    icon?: JSX.Element | undefined;
  }[];
};
const Navbar = ({ onclick, page, navBarLinks }: NavbarTypes) => {
  //ideally navBarLinks would be stored on our database but for now
  //lets leave it here

  return (
    <nav className={`${page}_navbar`}>
      <div className="navbar_container">
        <ul>
          <li>
            <img src={logo} alt="Stulink.png" />
          </li>
          {navBarLinks.map((items) => {
            return (
              <li
                key={items.id}
                className={items.class ? items.class : ""}
                onClick={onclick}
              >
                <Link to="#">
                  {items.link}
                  {items.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
