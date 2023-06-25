import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { VscEye } from "react-icons/vsc";
import google from "../../../Assets/google.png";
import "../styles.scss";
import { FormikValues, useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { AppContext } from "../../../utilities/context";
import LoadingBar from "../../LoadingBar/LoadingBar";
import { AuthContext } from "../../../utilities/context/AuthContext";
import axiosRequest from "../../utilities/axiosRequest";

const validationSchema = yup.object({
  email: yup
    .string()
    .min(6, "Please ensure this field is filled correctly")
    .required("This field is required"),
  // user.yup.string().email("please fill in email").required()
  password: yup.string().required("Please fill in your password"),
});

const Form = () => {
  const { error, setErrors } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // const authValues = useContext(AuthContext);
  // console.log(authValues);
  const onSubmit = async (values: FormikValues) => {
    const { email, password } = values;
    console.log(values);

    try {
      setIsLoading(true);
      const res = await axiosRequest.post("auth/login", {
        ...values,
        username: email,
      });
      setIsLoading(false);
      setErrors("");
      localStorage.setItem("currentUser", JSON.stringify(res.data.user));
      const currentUser = JSON.parse(localStorage.getItem("currentUser") || "");
      // authValues?.setIsAuthenticated(true)
      navigate(`/dashboard/projects`);
      console.log(res.data.message, currentUser);
    } catch (error: any) {
      setIsLoading(false);
      setErrors(error?.response?.data ? (error?.response?.data.error ? error?.response?.data.error : error?.response?.data) : error?.message);
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  return (
    <>
      {isLoading && <LoadingBar />}
      <div className="form">
        <section>
          <article>
            <span></span>
            <h1> Welcome Back</h1>
          </article>
          <form onSubmit={formik.handleSubmit}>
            <div>
              {" "}
              {error && (
                <article className="form_validation_errors">{error}</article>
              )}
              <label htmlFor="email">Email or UserName</label>
              {formik.touched.email && formik.errors.email ? (
                <article className="form_validation_errors">
                  {formik.errors.email}
                </article>
              ) : (
                ""
              )}
              <span
                className={
                  (formik.errors.email && formik.touched.email) || error
                    ? "error_input"
                    : ""
                }
              >
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
              {formik.touched.password && formik.errors.password ? (
                <article className="form_validation_errors">
                  {formik.errors.password}
                </article>
              ) : (
                ""
              )}
              <span
                className={
                  (formik.errors.password && formik.touched.password) || error
                    ? "error_input"
                    : ""
                }
              >
                <CiLock />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <VscEye onClick={() => setShowPassword(!showPassword)} />
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
            <p>Forget Password?</p>
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
        <article className="form_buttom">
          <p>
            No Account? <Link to={"/register"}>Create An Account</Link>
          </p>
        </article>
      </div>
    </>
  );
};

export default Form;
