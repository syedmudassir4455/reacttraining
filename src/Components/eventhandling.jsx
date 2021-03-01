import React, { Component } from "react";

class EventHandler extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeCLasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  handleIncrement() {
    console.log("Increment child", this.state.count); // you will get an error  if we keep  this.state.count
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

export default EventHandler;
