import React from "react";

// This Component has both a label and an actual input field.
//  I created it to reduce duplication in the Bio page.
//  If you wish, you could replace the input fields in the login page with this :)

type InputProps = {
  htmlFor: string;
  placeholder: string;
  value: string;
  labelText: string;
  id:string
};

const InputField = ({
  htmlFor,
  value,
  placeholder,
  labelText,
  id
}: InputProps) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{labelText}</label>
      <input id={id} type="text" placeholder={placeholder} value={value} />
    </div>
  );
};

export default InputField;
