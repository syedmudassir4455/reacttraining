import React, { Component } from "react";

class LoginForm extends Component {

    username = React.createRef();

    // componentDidMount(){
    //   this.username.current.focus();
    // }

    handleSubmit = e =>{
        e.preventDefault(0);
        const username = this.username.current.value;
        console.log("Submitted");
    }
  render() {
    return (
      <div className="col-4">
        <h1> Login form </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="from-group">
            <label htmlfor="username">UserName</label>
            <input autoFocus ref ={this.username} id="username" type="text" className="form-control"></input>
          </div>
          <div className="form-group">
            <label htmlfor="password">Password</label>
            <input id="password" type="password" className="form-control"></input>
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
