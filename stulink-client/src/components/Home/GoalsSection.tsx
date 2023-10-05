// import React from "react";
// import { AiOutlineSearch } from "react-icons/ai";
// import { CgProfile } from "react-icons/cg";
// import { BsCloudCheck } from "react-icons/bs";
// import grad from "../../Assets/gad.jpg";
// import logo from "../../Assets/stulink-logo-2.png";
// const GoalsSection = () => {
//   return (
//     <section className="feature">
//       <div className="feature__box">
//         <div className="features">
//           <div className="feature__desc">
//             <div className="feature__text">
//               <h1>
//                 Reach Your <br /> Goals With
//               </h1>
//               <img src={logo} alt="" />
//             </div>
//           </div>
//           <div className="feature__desc">
//             <div className="feature__icon">
//               <AiOutlineSearch className="icon" />
//             </div>

//             <div className="feature__text">
//               <p>
//                 Get info about what you need <br /> when you need it.
//               </p>
//             </div>
//           </div>
//           <div className="feature__desc">
//             <div className="feature__icon">
//               <CgProfile className="icon" />
//             </div>

//             <div className="feature__text">
//               <p>
//                 Meet people who have passed <br /> through your level and let
//                 them <br />
//                 guide you.
//               </p>
//             </div>
//           </div>
//           <div className="feature__desc">
//             <div className="feature__icon">
//               <BsCloudCheck className="icon" />
//             </div>

//             <div className="feature__text">
//               <p>
//                 Organize the tools for your success <br /> and work it,from
//                 anywhere <br /> at anytime.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="feature__img">
//           <div className="osa"></div>
//           <img src={grad} alt="" />
//           <p className="img__text">#ClassOf2023</p>
//         </div>
//       </div>
//       <div className="contributor">
//         <div className="contributor__part1">
//           <h1>
//             Be A <span>Contributor</span> To Others Success
//           </h1>
//           <p>
//             Create and release Articles,Solutions and Answers <br /> that
//             Students and people all over the world needs!
//           </p>
//         </div>
//         <button className="btn_3">Get Started</button>
//       </div>
//     </section>
//   );
// };

// export default GoalsSection;
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsCloudCheck } from "react-icons/bs";
import grad from "../../Assets/gad.jpg";
import logo from "../../Assets/stulink-logo-2.png";

const GoalsSection: React.FC = () => {
  return (
    <section className="feature">
      <div className="feature__box">
        <div className="features">
          <div className="feature__desc">
            <div className="feature__text">
              <h1>
                Reach Your <br /> Goals With
              </h1>
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="feature__desc">
            <div className="feature__icon">
              <AiOutlineSearch className="icon" />
            </div>

            <div className="feature__text">
              <p>
                Get info about what you need <br /> when you need it.
              </p>
            </div>
          </div>
          <div className="feature__desc">
            <div className="feature__icon">
              <CgProfile className="icon" />
            </div>

            <div className="feature__text">
              <p>
                Meet people who have passed <br /> through your level and let
                them <br />
                guide you.
              </p>
            </div>
          </div>
          <div className="feature__desc">
            <div className="feature__icon">
              <BsCloudCheck className="icon" />
            </div>

            <div className="feature__text">
              <p>
                Organize the tools for your success <br /> and work it,from
                anywhere <br /> at anytime.
              </p>
            </div>
          </div>
        </div>
        <div className="feature__img">
          <div className="osa"></div>
          <img src={grad} alt="" />
          <p className="img__text">#ClassOf2023</p>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
