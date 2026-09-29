import React from "react";

const FloatingInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = " ",
}) => {
  return (
    <div className="floating-input">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
      />

      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default FloatingInput;