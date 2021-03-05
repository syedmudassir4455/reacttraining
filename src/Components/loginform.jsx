import React, { Component } from "react";
import Input from "./Input";
import Joi from "joi-browser";
import Form from "./Form"

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  // username = React.createRef();
  // componentDidMount(){
  //   this.username.current.focus();
  // }


 
  doSubmit = () => {
    //call the server
    console.log("Submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="col-4">
        <h1> Login form </h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            ref={this.username}
            autoFocus
            name="username"
            value={data.username}
            onChange={this.handleChange}
            label="UserName"
            errors={errors.username}
          />

          <Input
            name="password"
            value={data.password}
            onChange={this.handleChange}
            label="Password"
            errors={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
