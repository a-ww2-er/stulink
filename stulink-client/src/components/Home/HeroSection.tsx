import React, { Key } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Navbar from "../Navbar";
import { MdArrowDropDown, MdOutlineArrowDropDown } from "react-icons/md";
type NavBarLinks = {
  navBarLinks: {
    id: Key | null;
    class?: string | undefined;
    link: String;
    icon?: JSX.Element | undefined;
  }[];
};

const HeroSection = ({ navBarLinks }: NavBarLinks) => {
  return (
    <div className="hero_section">
      <div className="hero_section_container">
        <Navbar
          onclick={() => console.log("you clicked something")}
          page={"home_page"}
          navBarLinks={navBarLinks}
        />
        <section>
          <h2>Bringing You To Your Goals!</h2>
          <p>
            Reach your dreams faster. Make the journey easier <br /> you're only
            one click away!
          </p>
        </section>
        {/* change this to take user to the explore page */}
        <Link to="/login" className="btn_1">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
