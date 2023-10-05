// import React from "react";
// import discuss from "../../../Assets/discuss.jpg";
// import getresources from "../../../Assets/getresources.jpg";
// import savetocloud from "../../../Assets/savetocloud.jpg";
// import meetnewpeople from "../../../Assets/meetnewpeople2.jpg";
// import worktogether from "../../../Assets/worktogether.jpg";
// import studytogether from "../../../Assets/studytogether.jpg";

// const ConnectSection = () => {
//   return (
//     <section className="connect">
//       <div className="connect__header">
//         <h1>Connect With Your Team!</h1>
//         <p>or Find Your Team,Right On Stulink </p>
//       </div>
//       <div className="section">
//         <div className="section__img">
//           <img src={discuss} alt="" />
//           <div className="section__overlay"></div>
//           <div className="section__text">
//             <h3>Discuss</h3>
//           </div>
//         </div>
//         <div className="section__img">
//           <img src={getresources} alt="" />
//           <div className="section__overlay"></div>
//           <div className="section__text">
//             <h3>Get Resources</h3>
//           </div>
//         </div>
//         <div className="section__img">
//           <img src={savetocloud} alt="" />
//           <div className="section__overlay"></div>
//           <div className="section__text">
//             <h3>Save to Cloud</h3>
//           </div>
//         </div>
//         <div className="section__img">
//           <img src={meetnewpeople} alt="" />
//           <div className="section__overlay"></div>
//           <div className="section__text">
//             <h3>Meet New People</h3>
//           </div>
//         </div>
//         <div className="section__img">
//           <img src={worktogether} alt="" />
//           <div className="section__overlay"></div>
//           <div className="section__text">
//             <h3>Work Together</h3>
//           </div>
//         </div>
//         <div className="section__img">
//           <img src={studytogether} alt="" />
//           <div className="section__overlay"></div>
//           <div className="section__text">
//             <h3>Study Together</h3>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConnectSection;
import React from "react";
import { Link } from "react-router-dom";
// import "./ConnectSection.scss"; // Assuming you have a separate CSS or SCSS file for styling

import discussImage from "../../../Assets/discuss.jpg";
import getresourcesImage from "../../../Assets/getresources.jpg";
import savetocloudImage from "../../../Assets/savetocloud.jpg";
import meetnewpeopleImage from "../../../Assets/meetnewpeople2.jpg";
import worktogetherImage from "../../../Assets/worktogether.jpg";
import studytogetherImage from "../../../Assets/studytogether.jpg";

const sectionData = [
  {
    imgSrc: discussImage,
    title: "Discuss",
  },
  {
    imgSrc: getresourcesImage,
    title: "Get Resources",
  },
  {
    imgSrc: savetocloudImage,
    title: "Save to Cloud",
  },
  {
    imgSrc: meetnewpeopleImage,
    title: "Meet New People",
  },
  {
    imgSrc: worktogetherImage,
    title: "Work Together",
  },
  {
    imgSrc: studytogetherImage,
    title: "Study Together",
  },
];

const ConnectSection = () => {
  return (
    <div className="connect">
      <div className="connect__header">
        <h1>Connect With Your Team!</h1>
        <p>or Find Your Team, Right On Stulink</p>
      </div>
      <div className="section">
        {sectionData.map((section, index) => (
          <div className="section__img" key={index}>
            <img src={section.imgSrc} alt={section.title} />
            <div className="section__overlay"></div>
            <div className="section__text">
              <h3>{section.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectSection;
