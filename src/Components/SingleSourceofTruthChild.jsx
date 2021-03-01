import React, { Component } from "react";

class SingleSourceofTruthChild extends Component {
  state = {
    value: this.props.counter.value,
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  }; 

  render() {
    return (
      <div>
        <span className={this.getBadgeCount()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm my-3"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm my-2 "
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          {" "}
          Delete
        </button>
      </div>
    );
  }
  getBadgeCount() {
    let Classes = "badge m-2 badge-";
    Classes += this.state.value === 0 ? "warning" : "primary";
    return Classes;
  }

  formatCount() {
    let { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default SingleSourceofTruthChild;
