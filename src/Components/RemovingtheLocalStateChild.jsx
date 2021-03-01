import React, { Component } from "react";

class RemovingtheLocalStateChild extends Component {
//   state = {
//     value: this.props.counter.value,
//   }; // ;  // we are not keeping because we dont require local state

//   handleIncrement = () => {
//     this.setState({ value: this.state.value + 1 });
//   }; // // As we dont have local, there is no need of this method

  render() {
    return (
      <div>
        <span className={this.getBadgeCount()}>{this.formatCount()}</span>
        <button
          onClick= {() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm my-3"
        >
          Increment
        </button>
        <button
          // className="btn btn-danger btn-sm my-2 "
         class="btn btn-outline-danger"
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
    Classes += this.props.counter.value === 0 ? "warning" : "primary";
    return Classes;
  }


  formatCount() {
    let { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default RemovingtheLocalStateChild;
