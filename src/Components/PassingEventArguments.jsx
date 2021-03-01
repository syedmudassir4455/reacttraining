import React, { Component } from "react";

class PassingEventArguments extends Component {
  state = {
    count: 0,
  };

  //   constructor() {
  //     super();
  //     console.log("constructor", this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }  this can be done in a easy way instead having constructor

  //   handleIncrement () {
  //     console.log("Increment child", this);
  //   }

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  // doHandleIncrement =() =>{
  //     this.handleIncrement({id : 1})
  // }  instead this we are using Inline function in render() method

  render() {
 
    return (
      <div>
        <span className={this.getBadgeCLasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({id:1})}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeCLasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    let { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default PassingEventArguments;
