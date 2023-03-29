import React from "react";
import Footer from "../../components/Login/atoms/Footer";
import Form from "../../components/Login/atoms/Form";
import Navbar from "../../components/Login/atoms/Navbar";
import "./loginstyles.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login_container">
        <section className="left">
          <Navbar />
          <article>
          <h1>Login</h1>
          <h3>StuLink is a place for everyone</h3>
          <p>
            Connect to a world of adventure login and show everyone what you've
            got
          </p></article>
          <Footer />
        </section>
        <section className="right">
          <Form />
        </section>
      </div>
    </div>
  );
};

export default Login;
