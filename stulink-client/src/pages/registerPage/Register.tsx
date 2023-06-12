import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../../components/register/atoms/Footer";
import Form from "../../components/register/atoms/Form";
import Navbar from "../../components/Navbar";
import PopupModal from "../../components/PopupModal/PopupModal";
import { AppContext } from "../../utilities/context";
import "./register.scss";
import { Helmet } from "react-helmet";

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
const Register = () => {
  const { modalOpen, setModalOpen, setCloseSidePanel, closeSidePanel } =
    useContext(AppContext);
  const navBarLinks = [
    { id: 0, link: "Home" },
    { id: 1, link: "Community" },
    { id: 2, link: "Explore" },
    { id: 3, link: "News" },
    { id: 4, class: "support_btn", link: "Support" },
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register- StuLink</title>
      </Helmet>
      <div className="register" >
        {modalOpen && (
          <PopupModal
            isOpen={modalOpen}
            handleClose={() => {
              setModalOpen(!modalOpen);
            }}
          >
            <section className="container">
              <span>
                <IoClose onClick={() => setModalOpen(!modalOpen)} />
              </span>
              <span>Modal</span>
              <section>
                hello , welcome to stulink, this feature is UNAVAILIABLE at the
                moment , try again later
              </section>
            </section>
          </PopupModal>
        )}
        <div className="register_container">
          <section className="left">
            <Navbar
              onclick={() => setModalOpen(!modalOpen)}
              page={"authentication_page"}
              navBarLinks={navBarLinks}
            />
            <motion.article
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={transition}
              className="message"
            >
              <h1>Register</h1>
              <h3>StuLink is a place for everyone</h3>
              <span>
                {" "}
                <p>Connect to a world of adventure </p>
                <p>login and show everyone what you've got</p>
              </span>
            </motion.article>
            <Footer onclick={() => setModalOpen(!modalOpen)} />
          </section>
          {/* Adding animation <AnimatePresence mode="wait"> */}
          <motion.section
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={transition}
            className="right"
          >
            <Form />
          </motion.section>
          {/* </AnimatePresence> */}
        </div>
      </div>
    </>
  );
};

export default Register;
