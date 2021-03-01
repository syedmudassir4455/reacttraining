import React, { Component } from "react";

class ExerciseDecrementButtonChild extends Component {
  render() {
    const { onIncrement, onDelete, counter, onDecrement } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeCount()}>{this.formatCount()}</span>
        </div>

        <div className="col">
        
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary m-1"
          >
            +
          </button>
          <button onClick={() => onDecrement(counter)} className="btn btn-secondary m-1" disabled ={this.props.counter.value === 0 ? 'disabled':''}> - </button>
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
    // console.log(value);
    let Classes = "badge mx-0  badge-";
    Classes += value === 0 ? "warning" : "primary";
    return Classes;
  }

  formatCount() {
    let { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default ExerciseDecrementButtonChild;
