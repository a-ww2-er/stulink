// import React from "react";

// const FooterSection = () => {
//   return (
//     <footer>
//       <div className="container">
//         <div className="container__row">
//           <div className="row__col">
//             <h4>Community</h4>
//             <ul>
//               <li>community</li>
//               <li>community</li>
//               <li>community</li>
//               <li>community</li>
//               <li>community</li>
//               <li>community</li>
//               <li>community</li>
//               <li>community</li>
//             </ul>
//           </div>
//           {/* 2nd */}
//           <div className="row__col">
//             <h4>Resources</h4>
//             <ul>
//               <li>community</li>
//               <li>community</li>
//               <li>community</li>
//               <li>community</li>
//               <li>community</li>
//             </ul>
//           </div>
//           {/* 3rd */}
//           <div className="row__col">
//             <h4>Explore</h4>
//             <ul>
//               <li>community</li>
//               <li>community</li>
//               <li>community</li>
//             </ul>
//           </div>
//           {/* 4th */}
//           <div className="row__col">
//             <h4>Documentations</h4>
//             <ul>
//               <li>community</li>
//               <li>community</li>
//               <li>community</li>
//               <li>community</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterSection;
// import React from "react";
// import { Link } from "react-router-dom";

// interface FooterSectionProps {
//   title: string;
//   links: string[];
//   linkTo: string;
// }

// const FooterSection: React.FC<FooterSectionProps> = ({
//   title,
//   links,
//   linkTo,
// }) => {
//   return (
//     <div className="row__col">
//       <h4>{title}</h4>
//       <div>
//         {links &&
//           links.map((link, index) => (
//             <Link key={index} to={linkTo}>
//               {link}
//             </Link>
//           ))}
//       </div>
//     </div>
//   );
// };

// const FooterSections = () => {
//   return (
//     <footer>
//       <div className="container">
//         <div className="container__row">
//           <FooterSection
//             title="Community"
//             links={["community", "community", "community", "community"]}
//             linkTo="/community"
//           />
//           <FooterSection
//             title="Resources"
//             links={["resource", "resource", "resource", "resource"]}
//             linkTo="/resources"
//           />
//           <FooterSection
//             title="Explore"
//             links={["explore", "explore", "explore"]}
//             linkTo="/explore"
//           />
//           <FooterSection
//             title="Documentations"
//             links={[
//               "documentation",
//               "documentation",
//               "documentation",
//               "documentation",
//             ]}
//             linkTo="/documentation"
//           />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterSections;
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/stulink-logo-2.png";
import github from "../../Assets/github.png";
import linkin from "../../Assets/in.png";
import insta from "../../Assets/insta.png";
import x from "../../Assets/x.png";

interface FooterSectionProps {
  title: string;
  links: string[];
  linkTo: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  links,
  linkTo,
}) => {
  return (
    <div className="row__col">
      <div>
        <h4>{title}</h4>
        <div>
          {links &&
            links.map((link, index) => (
              <Link key={index} to={linkTo}>
                {link}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

const FooterSections = () => {
  return (
    <footer>
      <div className="container">
        <div className="container__row">
          <FooterSection
            title="Community"
            links={[
              "community",
              "community",
              "community",
              "community",
              "community",
              "community",
              "community",
              "community",
            ]}
            linkTo="/community"
          />
          <FooterSection
            title="Resources"
            links={["resource", "resource", "resource", "resource", "resource"]}
            linkTo="/resources"
          />
          <FooterSection
            title="Explore"
            links={["explore", "explore", "explore"]}
            linkTo="/explore"
          />
          <FooterSection
            title="Documentations"
            links={[
              "documentation",
              "documentation",
              "documentation",
              "documentation",
            ]}
            linkTo="/documentation"
          />
        </div>
        <div className="row">
          <div className="col">
            <img src={logo} alt="" />
          </div>
          <div className="socialIcon">
            <img src={insta} alt="" />
            <img src={x} alt="" />
            <img src={linkin} alt="" />
            <img src={github} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSections;
