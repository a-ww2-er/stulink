import InputField from "../atoms/InputField";
import "../styles/Bio.scss"
const ChangePassword = () => {
  return (
    <div className="change_password">
      <InputField
        htmlFor="website_url"
        id="website_url"
        placeholder="somewhere.com"
        labelText="Website URL"
        value="Bleaxhdesigners.com"
      />
      <InputField
        htmlFor="website_url"
        id="website_url"
        placeholder="somewhere.com"
        labelText="Website URL"
        value="Bleaxhdesigners.com"
      />
      <InputField
        htmlFor="website_url"
        id="website_url"
        placeholder="somewhere.com"
        labelText="Website URL"
        value="Bleaxhdesigners.com"
      />
      <button>Confirm</button>
    </div>
  );
};

export default ChangePassword;
