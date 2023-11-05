import React, { ReactNode, useContext, useRef, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import google from "../../../Assets/google.png";
import { FormikBag, FormikValues, useFormik, withFormik } from "formik";
import * as yup from "yup";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import axios from "axios";
import { RegisterFormData } from "../../../utilities/RegisterData";
import { AppContext } from "../../../utilities/context";
import LoadingBar from "../../LoadingBar/LoadingBar";
import { IoIosInformationCircleOutline } from "react-icons/io";
import {
  bounceTransition,
  easeTransition,
  softTransition,
} from "../../../utilities/transitions";
import Select, { GroupBase, OptionsOrGroups } from "react-select";
import UploadAndReturnImage from "../../UploadAndReturnImage";
import "../styles.scss";

type form_object = {
  warning: ReactNode;
  options: OptionsOrGroups<string, GroupBase<string>> | undefined;
  required: any;
  onfocus: any;
  checked: boolean | undefined;
  disabled: boolean | undefined;
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  className?: string;
  group?: [];
};
type dropdownPlaceholder = {
  item: form_object;
};

//used to add an icon to select dropdown placeholders
export const DropdownPlaceholder = (item: dropdownPlaceholder) => {
  return (
    <article className="label_text">
      {item.item.placeholder}
      {!item.item.required && <IoIosInformationCircleOutline />}
    </article>
  );
};

declare module "yup" {
  interface MixedSchema {
    oneOfSchema(schemas: yup.AnySchema[] | any): MixedSchema;
  }
}
//creating a reuseable yup method to validate with multiple schemas
yup.addMethod<yup.MixedSchema>(
  yup.MixedSchema,
  "oneOfSchema",
  function (schemas: yup.AnySchema[]) {
    return this.test("one-of-schemas", "This field is Required", (item: any) =>
      schemas.some((schema) => schema.isValidSync(item, { strict: true }))
    );
  }
);

//yup validation schema for formik
const validationSchema = yup.object({
  // country: yup
  //   .mixed()
  //   .oneOfSchema([
  //     yup
  //       .object()
  //       .shape({
  //         label: yup.string().required(),
  //         value: yup.string().required(),
  //       })
  //       .nullable()
  //       .required("This field is required"),
  //   ])
  //   .required("This field is required"),
  firstName: yup
    .string()
    .matches(
      /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      "Please ensure this field is filled correctly"
    )
    .required("This field is required"),
  lastName: yup
    .string()
    .matches(
      /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      "Please ensure this field is filled correctly"
    )
    .required("This field is required"),
  email: yup
    .string()
    .email("Please ensure this field is filled correctly")
    .required("This field is required"),
  // schoolname: yup
  //   .string()
  //   .matches(
  //     /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
  //     "Please ensure this field is filled correctly"
  //   )
  //   .required("This field is required"),
  // mobileNumber: yup
  //   .string()
  //   .matches(
  //     /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/,
  //     "Please fill in a valid Mobile number"
  //   )
  //   .required("This field is required"),

  dateOfBirth: yup.string().required("Date is required"),
  gender: yup
    .mixed()
    .oneOfSchema([
      yup
        .object()
        .shape({
          label: yup.string().required(),
          value: yup.string().required(),
        })
        .nullable()
        .required("This field is required"),
    ]),
  //   .required("This field is required"),
  // schoolId: yup
  //   .string()
  //   // .matches(/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*/, "Invalid school ID")
  //   .min(6, "Invalid school ID")
  //   .max(6, "6 digit code"),
  // schoolCountry: yup
  //   .mixed()
  //   .oneOfSchema([
  //     yup
  //       .object()
  //       .shape({
  //         label: yup.string().required(),
  //         value: yup.string().required(),
  //       })
  //       .nullable()
  //       .required("This field is required"),
  //   ])
  //   .required("This field is required"),
  // faculty: yup
  //   .mixed()
  //   .oneOfSchema([
  //     yup
  //       .object()
  //       .shape({
  //         label: yup.string().required(),
  //         value: yup.string().required(),
  //       })
  //       .nullable()
  //       .required("This field is required"),
  //   ])
  //   .required("This field is required"),
  // department: yup
  //   .mixed()
  //   .oneOfSchema([
  //     yup
  //       .object()
  //       .shape({
  //         label: yup.string().required(),
  //         value: yup.string().required(),
  //       })
  //       .nullable()
  //       .required("This field is required"),
  //   ])
  //   .required("This field is required"),
  // student: yup.boolean().required("This field is required"),
  // staff: yup.boolean().required("This field is required"),
  // occupation: yup
  //   .string()
  //   .matches(
  //     /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
  //     "Please ensure this field is filled correctly"
  //   )
  //   .required("This field is required"),
  // businessName: yup
  //   .string()
  //   .matches(
  //     /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
  //     "Please ensure this field is filled correctly"
  //   )
  //   .required("This field is required"),
  // businessUrl: yup
  //   .string()
  //   .matches(
  //     /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
  //     "Invalid URL"
  //   )
  //   .required("This field is required"),
  // occupationStatus: yup
  //   .mixed()
  //   .oneOfSchema([
  //     yup
  //       .object()
  //       .shape({
  //         label: yup.string().required(),
  //         value: yup.string().required(),
  //       })
  //       .nullable()
  //       .required("This field is required"),
  //   ])
  //   .required("This field is required"),
  userName: yup
    .string()
    .matches(/^[a-zA-Z0-9]{4,16}$/, "Invalid Username")
    .required("This field is required"),
  // websiteUrl: yup
  //   .string()
  //   .matches(
  //     /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
  //     "Invalid URL"
  //   )
  //   .min(6, "Please ensure this field is filled correctly")
  //   .required("This field is required"),
  password: yup
    .string()
    .matches(
      /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/,
      "Please ensure this field is filled correctly"
    )
    .min(6, "Please ensure this field is filled correctly")
    .required("This field is required"),
  confirmPassword: yup
    .string()
    .required("This field is required")
    .oneOf([yup.ref("password")], "Passwords do not match"),
  // consent: yup.boolean().required("This field is required"),
  // profilePhoto: yup
  //   .string()
  //   .matches(
  //     /((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/,
  //     "Profile Upload Failed"
  //   ),
});

//main form , taking in props from "withformik()"
const Form = (props: {
  values: any;
  touched: any;
  dirty: any;
  errors: any;
  handleChange: any;
  handleBlur: any;
  handleSubmit: any;
  handleReset: any;
  setFieldValue: any;
  setFieldTouched: any;
  isSubmitting: any;
}) => {
  const {
    values,
    touched,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
  } = props;
  const { error, setErrors, isLoading, setIsLoading } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);

  const [formIndex, setFormIndex] = useState<number>(0);

  let [tupl, setTupl] = useState<[number, number]>([0, formIndex]);

  if (tupl[1] !== formIndex) {
    setTupl((old) => [old[1], formIndex]);
  }
  let prevFormIndex: null | number = tupl[0];
  let direction = formIndex > prevFormIndex ? 1 : -1;

  const profilePhotoRef = useRef<any>(null);
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  //handle the previous button
  const handlePrev = () => {
    if (formIndex > 0) {
      setFormIndex((previousIndex) => previousIndex - 1);
      return true;
    }
    return false;
  };
  //handle the next button
  const handleNext = () => {
    if (formIndex < RegisterFormData.length) {
      setFormIndex((previousIndex) => previousIndex + 1);
      return true;
    }
    return false;
  };
  // minor error handling to prevent page over-skipping
  if (!!(RegisterFormData[formIndex] == undefined)) {
    setFormIndex(0);
    redirect("/register");
    return <></>;
  }
  //variant for framer-motion
  let variant = {
    enter: (direction: number) => ({
      opacity: 0.5,
      // x: direction * (344 * formIndex) ,
    }),
    center: { opacity: 1, x: -344 * formIndex },
    // exit: (direction: string) => ({
    //   // opacity: 0.5,
    //   x: direction === "increasing" ? -344 * formIndex : 344 * formIndex,
    // }),
  };
  return (
    <>
      {isLoading && <LoadingBar />}
      <div className="register_form" id="register">
        <section>
          <article>
            <span></span>
            <h1> Create Account</h1>
            {error ? <p className="form_validation_errors">{error}</p> : ""}
            <AnimatePresence initial={true} mode="wait">
              <motion.p
                initial={{ opacity: 0, x: 200 }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{ opacity: 0, x: -200 }}
                transition={bounceTransition(0.2)}
              >
                {RegisterFormData?.[formIndex][0]}
              </motion.p>
            </AnimatePresence>
          </article>{" "}
          <div className="form_container">
            <AnimatePresence initial={true} mode="wait">
              <motion.form
                // key={formIndex}
                variants={variant}
                initial="enter"
                animate="center"
                // exit="exit"
                custom={direction}
                transition={bounceTransition(0.1)}
                onSubmit={handleSubmit}
              >
                {RegisterFormData.map(
                  (
                    eachForm: form_object[][],
                    index: React.Key | null | undefined
                  ) => {
                    return (
                      <AnimatePresence initial={true} mode="wait">
                        <motion.div
                          initial={{ opacity: 0.5, x: -200 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -200 }}
                          transition={bounceTransition}
                          className="form_data"
                        >
                          {eachForm[1].map((items: form_object) => {
                            if (items.group) {
                              return (
                                <div className="group_input">
                                  {items.label && <label>{items.label}:</label>}
                                  {items.group.map(
                                    (groupitems: form_object) => {
                                      const { name } = groupitems;
                                      return (
                                        <aside
                                          key={groupitems.id}
                                          className={
                                            groupitems.className
                                              ? groupitems.className
                                              : ""
                                          }
                                        >
                                          {groupitems.type !== "select" ? (
                                            <>
                                              <label htmlFor={groupitems.name}>
                                                {groupitems.label}
                                                {touched[
                                                  name as keyof typeof touched
                                                ] &&
                                                errors[
                                                  name as keyof typeof errors
                                                ] ? (
                                                  <article className="form_validation_errors">
                                                    {
                                                      errors[
                                                        name as keyof typeof errors
                                                      ]
                                                    }
                                                  </article>
                                                ) : (
                                                  ""
                                                )}
                                              </label>
                                              <span
                                                className={
                                                  (errors[
                                                    name as keyof typeof errors
                                                  ] &&
                                                    touched[
                                                      name as keyof typeof touched
                                                    ]) ||
                                                  error
                                                    ? "error_input"
                                                    : ""
                                                }
                                              >
                                                <input
                                                  className={
                                                    groupitems.className
                                                  }
                                                  type={groupitems.type}
                                                  name={groupitems.name}
                                                  id={groupitems.id}
                                                  checked={groupitems.checked}
                                                  disabled={groupitems.disabled}
                                                  onFocus={(e) =>
                                                    groupitems?.onfocus
                                                      ? groupitems.onfocus(e)
                                                      : ""
                                                  }
                                                  placeholder={
                                                    groupitems.placeholder
                                                  }
                                                  value={
                                                    values[
                                                      name as keyof typeof values
                                                    ]
                                                  }
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                />
                                              </span>
                                            </>
                                          ) : (
                                            <>
                                              <label htmlFor={groupitems.name}>
                                                {groupitems.label}
                                                {touched[
                                                  name as keyof typeof touched
                                                ] &&
                                                errors[
                                                  name as keyof typeof errors
                                                ] ? (
                                                  <article className="form_validation_errors">
                                                    {
                                                      errors[
                                                        name as keyof typeof errors
                                                      ]
                                                    }
                                                  </article>
                                                ) : (
                                                  ""
                                                )}
                                              </label>

                                              <Select
                                                className={
                                                  groupitems?.className
                                                }
                                                options={groupitems.options}
                                                //  multi={true}
                                                onChange={(value) =>
                                                  setFieldValue(
                                                    `${groupitems.name}`,
                                                    value
                                                  )
                                                }
                                                onBlur={() =>
                                                  setFieldTouched(
                                                    `${groupitems.name}`,
                                                    true
                                                  )
                                                }
                                                value={values.gender}
                                                name={name}
                                                placeholder={
                                                  groupitems.placeholder
                                                }
                                              />
                                            </>
                                          )}
                                        </aside>
                                      );
                                    }
                                  )}
                                </div>
                              );
                            }
                            if (items.type === "select") {
                              return (
                                <aside>
                                  <label htmlFor={items.name}>
                                    <article className="label_text">
                                      {items.label}{" "}
                                    </article>
                                    {touched[
                                      items.name as keyof typeof touched
                                    ] &&
                                    errors[
                                      items.name as keyof typeof errors
                                    ] ? (
                                      <article className="form_validation_errors">
                                        {
                                          errors[
                                            items.name as keyof typeof errors
                                          ]
                                        }
                                      </article>
                                    ) : (
                                      ""
                                    )}
                                  </label>

                                  <Select
                                    className={items?.className}
                                    options={items.options}
                                    // multi={true}
                                    onChange={(value) =>
                                      setFieldValue(`${items.name}`, value)
                                    }
                                    onBlur={() =>
                                      setFieldTouched(`${items.name}`, true)
                                    }
                                    isSearchable={true}
                                    value={
                                      values[items.name as keyof typeof values]
                                    }
                                    name={items.name}
                                    placeholder={
                                      <DropdownPlaceholder item={items} />
                                    }
                                  />
                                </aside>
                              );
                            }
                            if (items.type === "file") {
                              return (
                                <>
                                  <label htmlFor={items.name}>
                                    {errors[
                                      items.name as keyof typeof errors
                                    ] ? (
                                      <article className="form_validation_errors">
                                        {
                                          errors[
                                            items.name as keyof typeof errors
                                          ]
                                        }
                                      </article>
                                    ) : (
                                      ""
                                    )}
                                  </label>
                                  <aside
                                    onClick={() => {
                                      profilePhotoRef.current !== null &&
                                        profilePhotoRef.current.click();
                                    }}
                                    className="photo_container"
                                  >
                                    {" "}
                                    {file ? (
                                      <UploadAndReturnImage
                                        file={file}
                                        setFieldValue={setFieldValue}
                                        items={items}
                                      />
                                    ) : (
                                      <button type="button">
                                        Upload Profile Photo
                                      </button>
                                    )}
                                  </aside>

                                  <input
                                    hidden
                                    ref={profilePhotoRef}
                                    id={items.id}
                                    name={items.name}
                                    type={items.type}
                                    onChange={(
                                      event:
                                        | React.ChangeEvent<HTMLInputElement>
                                        | any
                                    ) => {
                                      setFile(event.currentTarget.files[0]);
                                    }}
                                    className="form-control"
                                  />
                                </>
                              );
                            }
                            const { name } = items;
                            return (
                              <section
                                key={items.id}
                                className={
                                  items.className ? items.className : ""
                                }
                              >
                                <label htmlFor={items.name}>
                                  <article className="label_text">
                                    {items.label}
                                  </article>
                                  {touched[name as keyof typeof touched] &&
                                  errors[name as keyof typeof errors] ? (
                                    <article className="form_validation_errors">
                                      {errors[name as keyof typeof errors]}
                                    </article>
                                  ) : (
                                    ""
                                  )}
                                </label>
                                <span
                                  tabIndex={0}
                                  className={
                                    (errors[name as keyof typeof errors] &&
                                      touched[name as keyof typeof touched]) ||
                                    error
                                      ? "error_input"
                                      : ""
                                  }
                                >
                                  <input
                                    type={items.type}
                                    name={items.name}
                                    id={items.id}
                                    placeholder={items.placeholder}
                                    value={values[name as keyof typeof values]}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <article className="label_text">
                                    {" "}
                                    {!items.required && (
                                      <IoIosInformationCircleOutline />
                                    )}
                                  </article>
                                </span>{" "}
                                <aside className="warning">
                                  {items.warning &&
                                    touched[name as keyof typeof touched] &&
                                    items.warning}
                                </aside>
                              </section>
                            );
                          })}
                        </motion.div>
                      </AnimatePresence>
                    );
                  }
                )}
              </motion.form>
            </AnimatePresence>
          </div>
          <span className="btns">
            {formIndex > 0 ? (
              <button
                disabled={isLoading}
                type="button"
                className="prev_btn"
                onClick={handlePrev}
              >
                Back
              </button>
            ) : (
              <span></span>
            )}
            {formIndex < RegisterFormData.length - 1 ? (
              <button
                disabled={isLoading}
                type="button"
                className="next_btn"
                onClick={handleNext}
              >
                Next
              </button>
            ) : (
              <button
                disabled={isLoading}
                type="submit"
                className="submit_btn"
                onClick={handleSubmit}
              >
                Create Account
              </button>
            )}
          </span>
          {!!(formIndex === 0) && (
            <AnimatePresence initial={true}>
              {" "}
              <motion.section
                initial={{ opacity: 0.5, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -200 }}
                transition={bounceTransition}
                className="form_buttom"
              >
                <span className="or">
                  <span> </span> or <span></span>
                </span>
                <Link to={"#"} className="google_btn">
                  <img src={google} alt="png" />
                  <p>Sign up with Google</p>
                </Link>
                <Link to={"/login"}>Already Have An Account?</Link>{" "}
              </motion.section>{" "}
            </AnimatePresence>
          )}
        </section>{" "}
      </div>
    </>
  );
};
const UploadForm = () => {
  const { error, setErrors, isLoading, setIsLoading } = useContext(AppContext);
  const navigate = useNavigate();

  const submit = async (values: FormikValues, formikBag: any) => {
    formikBag.resetForm = false;
    const { email, password } = values;
    setIsLoading(true);
    console.log(values);

    try {
      setIsLoading(true);
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        ...values,
        // acc: { student: values.student, staff: values.staff },
      });
      setIsLoading(false);
      setErrors("");
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      console.log(res.data);
      // const currentUser = JSON.parse(localStorage.getItem("currentUser") || "");
      navigate(`/login`);
      // console.log(res.data.message, currentUser);
    } catch (error: any) {
      setIsLoading(false);
      setErrors(
        error?.response?.data
          ? error?.response?.data.error
            ? error?.response?.data.error
            : error?.response?.data
          : error?.message
      );
      console.log(error);
    }
  };

  const formikEnhancer = withFormik({
    validateOnBlur: true,
    validationSchema: validationSchema,
    mapPropsToValues: (props) => ({
      firstName: "",
      lastName: "",
      email: "",
      // mobileNumber: "",
       gender: [],
       dateOfBirth: "",
      // schoolId: "",
      // schoolname: "",
      // schoolCountry: [],
      // faculty: [],
      // department: [],
      // student: false,
      // staff: false,
      // occupation: "",
      // businessName: "",
      // businessUrl: "",
      // occupationStatus: [],
       userName: "",
      // websiteUrl: "",
      // country: [],
       password: "",
       confirmPassword: "",
       consent: true,
      // profilePhoto: "",
    }),
    enableReinitialize: false,
    handleSubmit: submit,
    displayName: "StuLink-RegisterForm",
  });
  const MyEnhancedForm = formikEnhancer(Form);
  return (
    <>
      <MyEnhancedForm />
    </>
  );
};
export default UploadForm;

// const ignoreCircularReferances = () => {
//   const seen = new WeakSet();
//   return (key: string, value: null) => {
//     if (key.startsWith("_")) return;
//     if (typeof value === "object" && value !== null) {
//       if (seen.has(value)) return;
//       seen.add(value);
//     }
//     return value;
//   };
// };
