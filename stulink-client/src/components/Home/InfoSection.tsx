import React from "react";
import image1 from "../../Assets/info-section.png";
import instagram from "../../Assets/instagram.png";
import word from "../../Assets/word.png";
import schoolHat from "../../Assets/school-hat.png";
import { Link } from "react-router-dom";
import "./styles.scss";

const InfoSection = () => {
  return (
    <div className="info_section">
      <div className="info_section_container">
        <section className="right">
          <img className="right_bg" src={image1} alt="" />

          <span className="social_pill">
            <img src={instagram} alt="" />
            <p>Socials</p>
          </span>
          <span className="social_pill">
            <img src={word} alt="" />
            <p>Work </p>
          </span>
          <span className="social_pill">
            <img src={schoolHat} alt="" />
            <p> School</p>
          </span>
        </section>
        <section className="left">
          <h2>
            Organize
            <span> Everything </span> in one
          </h2>
          <p>
            Link up everything about your life to one place... <br />
            To StuLink.
          </p>
          <Link to="/register" className="btn_2">
            Create An Account
          </Link>
        </section>
      </div>
    </div>
  );
};

export default InfoSection;
