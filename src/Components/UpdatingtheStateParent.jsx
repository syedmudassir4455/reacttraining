import React, { Component } from "react";
import UpdatingStateChild from "./UpdatingtheStateChild";

class UpdatingStateParent extends Component {
  state = {
    Counter: [
      { id: 1, value: 10 },
      { id: 2, value: 34 },
      { id: 3, value: 45 },
      { id: 4, value: 90 },
    ],
  };

  handleDelete = Counterid => {
    // console.log("Event Handler called",this.props.Counterid);

    const Counter = this.state.Counter.filter(
      (count) => count.id !== Counterid
    );
    this.setState({ Counter});
  };
  render() {
    return (
      <div>
        {this.state.Counter.map((counter => {
          console.log("Parent", counter.value);
          return (
            <UpdatingStateChild
              key={counter.id}
              onDelete={this.handleDelete}
              value={counter.value}
              // id={counter.id}
              counter = {counter}
            ></UpdatingStateChild>
          );
        }))}
      </div>
    );
  }
}

export default UpdatingStateParent;
