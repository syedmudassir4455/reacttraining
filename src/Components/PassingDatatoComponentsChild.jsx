import React, { Component } from "react";

class PassingDatatoComponentsChild extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("Props Peperty", this.props); 

    return (
      <div>
      {/* {this.props.children} */}

      <h4>{this.props.id}</h4>
        <span className={this.getBadgeCount()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm my-3"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeCount() {
    let Classes = "badge m-1 badge-";
    Classes += this.state.value === 0 ? "warning" : "primary";
    return Classes;
  }

  formatCount() {
    let { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default PassingDatatoComponentsChild;
