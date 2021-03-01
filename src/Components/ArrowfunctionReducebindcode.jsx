import React, { Component } from "react";

class ArrowFunction extends Component {
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

handleIncrement = () =>{
    console.log("Increment child",this)
}

  render() {
    return (
      <div>
        <span className={this.getBadgeCLasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
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

export default ArrowFunction;
