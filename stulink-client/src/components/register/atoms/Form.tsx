import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../../Assets/google.png";
import { FormikValues, useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { AppContext } from "../../../utilities/context";
import LoadingBar from "../../LoadingBar/LoadingBar";
import "../styles.scss";

type form_object = {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  className?: string;
  group?: [];
};
const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(6, "Please ensure this field is filled correctly")
    .required("This field is required"),
  lastName: yup
    .string()
    .min(6, "Please ensure this field is filled correctly")
    .required("This field is required"),
  email: yup
    .string()
    .min(6, "Please ensure this field is filled correctly")
    .required("This field is required"),
  mobileNumber: yup
    .string()
    .min(6, "Please ensure this field is filled correctly")
    .required("This field is required"),
  gender: yup
    .string()
    .min(6, "Please ensure this field is filled correctly")
    .required("This field is required"),
  date: yup.string().required("Please fill in your password"),
});

const Form = () => {
  const { errors, setErrors } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values: FormikValues) => {
    const { email, password } = values;

    try {
      setIsLoading(true);
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        email,
        // username:email,
        password,
      });
      setIsLoading(false);
      setErrors("");
      localStorage.setItem("currentUser", JSON.stringify(res.data));

      // const currentUser = JSON.parse(localStorage.getItem("currentUser") || "");
      navigate(`/dashboard/projects`);
      // console.log(res.data.message, currentUser);
    } catch (error: any) {
      setIsLoading(false);
      setErrors(error?.response?.data ? error?.response?.data : error?.message);
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      gender: "",
      date: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  const form_object = [
    {
      id: "firstName",
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name",
    },
    {
      id: "LastName",
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter your last name",
    },
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter email",
    },
    {
      id: "mobileNumber",
      name: "mobileNumber",
      label: "Mobile Number",
      className: "",
      type: "number",
      placeholder: "Enter your mobile number",
    },
    {
      group: [
        {
          id: "gender",
          name: "gender",
          label: "Gender",
          className: "gender",
          type: "text",
          placeholder: "Select gender",
        },
        {
          id: "date",
          name: "date",
          className: "date",
          label: "Date of Birth",
          type: "date",
          placeholder: "Select date",
        },
      ],
    },
  ];
  return (
    <>
      {isLoading && <LoadingBar />}
      <div className="register_form">
        <section>
          <article>
            <span></span>
            <h1> Create Account</h1>
            <p>Personal Details</p>
          </article>
          <form onSubmit={formik.handleSubmit}>
            {form_object.map((items) => {
              if (items.group) {
                return (
                  <div className="group_input">
                    {" "}
                    {items.group.map((groupitems: form_object) => {
                      const { name } = groupitems;

                      return (
                        <div
                          key={groupitems.id}
                          className={
                            groupitems.className ? groupitems.className : ""
                          }
                        >
                          <label htmlFor={groupitems.name}>
                            {groupitems.label}
                            {formik.touched[
                              name as keyof typeof formik.touched
                            ] &&
                            formik.errors[
                              name as keyof typeof formik.errors
                            ] ? (
                              <article className="form_validation_errors">
                                {
                                  formik.errors[
                                    name as keyof typeof formik.errors
                                  ]
                                }
                              </article>
                            ) : (
                              ""
                            )}
                          </label>
                          <span
                            className={
                              (formik.errors[
                                name as keyof typeof formik.errors
                              ] &&
                                formik.touched[
                                  name as keyof typeof formik.touched
                                ]) ||
                              errors
                                ? "error_input"
                                : ""
                            }
                          >
                            <input
                              type={groupitems.type}
                              name={groupitems.name}
                              id={groupitems.id}
                              placeholder={groupitems.placeholder}
                              value={
                                formik.values[
                                  name as keyof typeof formik.values
                                ]
                              }
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </span>
                        </div>
                      );
                    })}
                  </div>
                );
              }
              const { name } = items;
              return (
                <div
                  key={items.id}
                  className={items.className ? items.className : ""}
                >
                  <label htmlFor={items.name}>
                    {items.label}
                    {formik.touched[name as keyof typeof formik.touched] &&
                    formik.errors[name as keyof typeof formik.errors] ? (
                      <article className="form_validation_errors">
                        {formik.errors[name as keyof typeof formik.errors]}
                      </article>
                    ) : (
                      ""
                    )}
                  </label>

                  <span
                    className={
                      (formik.errors[name as keyof typeof formik.errors] &&
                        formik.touched[name as keyof typeof formik.touched]) ||
                      errors
                        ? "error_input"
                        : ""
                    }
                  >
                    <input
                      type={items.type}
                      name={items.name}
                      id={items.id}
                      placeholder={items.placeholder}
                      value={formik.values[name as keyof typeof formik.values]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </span>
                </div>
              );
            })}
            {/* {errors && (
                <article className="form_validation_errors">{errors}</article>
              )} */}
            <span>
              <button type="submit" className="next_btn">
                Next
              </button>
            </span>
          </form>
          {/* <Link to={"#"}> */}
          {/* </Link> */}

          <section className="form_buttom">
            <span className="or">
              <span> </span> or <span></span>
            </span>
            <Link to={"#"} className="google_btn">
              <img src={google} alt="png" />
              <p>Sign up with Google</p>
            </Link>
            <Link to={"/login"}>Already Have An Account?</Link>{" "}
          </section>
        </section>
      </div>
    </>
  );
};

export default Form;
