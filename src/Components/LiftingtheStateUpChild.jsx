import React, { Component } from "react";

class LiftingtheStateUpChild extends Component {
  render() {
    const { onIncrement, onDelete, counter } = this.props;
    return (
      <div className="row my-1">
        <div className="col-1">
          <span className={this.getBadgeCount()}>{this.formatCount()}</span>
        </div>
        <div className="col-2">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary"
          >
            Increment
          </button>
        </div>
        <div className="col-1">
          <button
            className="btn btn-danger"
            onClick={() => onDelete(counter.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  getBadgeCount() {
    let { value } = this.props.counter;
    console.log(value);
    let Classes = "badge m-2 badge-";
    Classes += value === 0 ? "warning" : "primary";
    return Classes;
  }

  formatCount() {
    let { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default LiftingtheStateUpChild;
