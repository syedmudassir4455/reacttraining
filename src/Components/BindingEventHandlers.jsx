import React, { Component } from "react";

class BindingEventHandlers extends Component {
  state = {
    count: 0,
  };



  constructor (){
  super();
 console.log("constructor",this)

//     //  this.handleIncrement.bind(this) // it will always gives you undefine, so i have kept in a this.handleIncrement
   this.handleIncrement= this.handleIncrement.bind(this)
     
 }
  
  handleIncrement() {
    console.log("Increment child",this); // you will get an error  if we keep  this.state.count
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
export default BindingEventHandlers;
