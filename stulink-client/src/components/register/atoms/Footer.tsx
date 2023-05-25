import React from "react";
import { Link } from "react-router-dom";
import "../styles.scss";

const Footer = ({ onclick }: any) => {
  //ideally this would be stored on our database but for now
  //lets leave it here
  const footer = [
    { id: 0, link: "Company" },
    { id: 1, link: "Resources" },
    { id: 2, link: "Legal" },
    { id: 3, class: "", link: "Documentations" },
  ];
  return (
    <div className="authentication_page_footer">
      <ul onClick={onclick}>
        {footer.map((items) => {
          return (
            <li key={items.id} className={items.class && items.class}>
              <Link to="/login">{items.link}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
