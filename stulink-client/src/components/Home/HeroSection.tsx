import React, { Key, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../../Assets/hero-section.png";
import "./styles.scss";
import Navbar from "../Navbar";
import { MdArrowDropDown, MdOutlineArrowDropDown } from "react-icons/md";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import {
  bounceTransition,
  easeTransition,
  softTransition,
} from "../../utilities/transitions";
type NavBarLinks = {
  navBarLinks: {
    id: Key | null;
    class?: string | undefined;
    link: String;
    icon?: JSX.Element | undefined;
  }[];
};

const HeroSection = ({ navBarLinks }: NavBarLinks) => {
  const [scroll, setScroll] = useState<number>(0);
  const { scrollY } = useScroll();
  // let page:number;
  useMotionValueEvent(scrollY, "change", (latest) => {
    return setScroll(latest);
  });
    useEffect(() => {
      console.log(scroll);
    }, [scroll]);
  return (
    <motion.div
      variants={{
        initial: { y: -160 },
        normal: { y: 0 },
      }}
      initial="initial"
      animate="normal"
      transition={easeTransition}
      className="hero_section"
    >
      {/* <img className="bg_image" src={bgImage} alt="" /> */}
      <div className="hero_section_container">
        <Navbar
          onclick={() => console.log("you clicked something")}
          page={"home_page"}
          navBarLinks={navBarLinks}
          onscroll={scroll}
        />
        <section>
          <motion.h2
            variants={{
              initial: { x: -200 },
              normal: { x: 0 },
            }}
            initial="initial"
            animate="normal"
            transition={bounceTransition(2.0, 0.6, 0)}
          >
            Bringing You To Your Goals!
          </motion.h2>
          <motion.p
            variants={{
              initial: { x: 200 },
              normal: { x: 0 },
            }}
            initial="initial"
            animate="normal"
            transition={bounceTransition(2.0, 0.6, 0)}
          >
            Reach your dreams faster. Make the journey easier <br /> you're only
            one click away!
          </motion.p>
        </section>
        {/* change this to take user to the explore page */}

        <Link to="/login" className="btn_1">
          Get started
        </Link>
      </div>
    </motion.div>
  );
};

export default HeroSection;
