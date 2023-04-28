import InputField from "../atoms/InputField";
import "../styles/Bio.scss";

const PersonalData = () => {
  return (
    <div className="personal_data">
      <InputField
        htmlFor="first_name"
        id="first_name"
        placeholder="Enter First Name"
        labelText="First Name"
        value="Joseph"
      />
      <InputField
        htmlFor="middle_name"
        id="middle_name"
        placeholder="Enter Middle Name"
        labelText="Middle Name"
        value="Francisco"
      />
      <InputField
        htmlFor="last_name"
        id="last_name"
        placeholder="Enter Last Name"
        labelText="Last Name"
        value="Vlahovic"
      />
      <InputField
        htmlFor="country"
        id="country"
        placeholder="Enter Country"
        labelText="Country"
        value="United Kingdom"
      />
      <InputField
        htmlFor="mobile_number"
        id="mobile_number"
        placeholder="Enter Phone Number"
        labelText="Mobile Number"
        value="+42 9483993292"
      />
      <InputField
        htmlFor="website_url"
        id="website_url"
        placeholder="somewhere.com"
        labelText="Website URL"
        value="Bleaxhdesigners.com"
      />
      <div>
        <label htmlFor="">Gender</label>
        <select name="Gender" id="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <div>
        <label htmlFor="">Date of Birth</label>
        <select name="Date Of Birth" id="date_of_birth">
          <option value="19/11/2000">19/11/2000</option>
        </select>
      </div>
    </div>
  );
};

export default PersonalData;
