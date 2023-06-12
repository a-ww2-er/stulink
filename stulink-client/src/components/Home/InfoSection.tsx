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
          <img src={image1} alt="" />
          <aside>
            <span className="social_pill">
              <img src={instagram} alt="" />
              Socials
            </span>
            <span className="social_pill">
              <img src={word} alt="" />
              Work
            </span>
            <span className="social_pill">
              <img src={schoolHat} alt="" />
              School
            </span>
          </aside>
        </section>
        <section className="left">
          <h2>
            Organize <br />
            <span>Everything</span> in <br />one.
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
