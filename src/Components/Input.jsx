import React, { Component } from "react";

const Input = ({ name, label, autoFocus, errors, ...rest }) => {
  return (
    <div className="from-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus={autoFocus}
        {...rest}
        name={name}
        id={name}
        className="form-control"
      />

      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;
