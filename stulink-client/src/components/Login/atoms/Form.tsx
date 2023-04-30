import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import { AiOutlineUser, AiOutlineEye } from "react-icons/ai";
import { VscEye } from "react-icons/vsc";
import google from "../../../Assets/google.png";
import "../styles.scss";
import { FormikValues, useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const validationSchema = yup.object({
  email: yup
    .string()
    .min(6, "please enter full email")
    .required("Full name is required"),
  // user.yup.string().email("please fill in email").required()
  password: yup.string().required(),
});

const Form = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (values: FormikValues) => {
    const { email, password } = values;
    console.log(email, password);
    try {
      const res = await axios.post("https://stulink-api.onrender.com/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("currentUser", JSON.stringify(res.data));

      // const currentUser = JSON.parse(localStorage.getItem("currentUser") || "");

      navigate(`/dashboard/${res.data._id}/projects`);
      // console.log(res.data.message, currentUser);
    } catch (error: any) {
      setError(`Error: ${error.response}`);
    }
  };
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  console.log("errors:", formik.errors);
  return (
    <div className="form">
      <section>
        <article>
          <span></span>
          <h1> Welcome Back</h1>
        </article>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email">Email or UserName</label>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
            <span>
              <AiOutlineUser />

              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter Your Email or Username"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </span>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""}
            <span>
              <CiLock />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <VscEye />
            </span>
          </div>
          <button type="submit" className="login_btn">
            Login
          </button>
        </form>
        <span className="remember_me">
          <span>
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Remember me</label>{" "}
          </span>
          <p>forget Password</p>
        </span>
        {/* <Link to={"#"}> */}

        {/* </Link> */}
        <span className="or">
          <span> </span> or <span></span>
        </span>
        <Link to={"#"} className="google_btn">
          <img src={google} alt="png" />
          <p>Login with Google</p>
        </Link>
      </section>
      <article>
        <p>
          No Account?<span>Create An Account</span>
        </p>
        {error && error}
      </article>
    </div>
  );
};

export default Form;
