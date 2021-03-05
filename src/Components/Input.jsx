import React, { Component } from "react";

const Input = ({name,label,onChange,value,autoFocus,errors}) => {


  return (
    <div className="from-group">
      <label htmlFor="username">{label}</label>
      <input
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type="text"
        className="form-control"
      />

      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;
