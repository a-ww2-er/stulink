import * as yup from "yup";
import { FormikValues, useFormik } from "formik";
import axios from "axios";


// This is the form created for testing purposes.
// User details are submitted to simulate logging in and
// the json-server is queried and mock data retrieved
// Will be deleted when backend is fully set up
type MockFormProps = {
  handleMockData: (data: any) => void;
};

const validationSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().required(),
});

const MockForm = ({ handleMockData }: MockFormProps) => {
  const retrieveUserData = async (values: FormikValues) => {
    try {
      const res = await axios.get("http://localhost:8000/users");
      const userData = res.data.find(
        (obj: any) => obj.username === values.username
      );
      if (!userData) {
        throw new Error("User not found");
      }
      localStorage.setItem("userData", userData);
      handleMockData(userData);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const formik = useFormik({
    initialValues: { username: "", email: "" },
    validateOnBlur: true,
    onSubmit: retrieveUserData,
    validationSchema: validationSchema,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MockForm;
