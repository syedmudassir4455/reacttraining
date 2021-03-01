import React, { Component } from "react";
import RaisingandHandlingEventsChild from "./RaisingandHandlingEventschild";

class RaisingandHandlingEventsParent extends Component {
  state = {
    Counter: [
      { id: 1, value: 10 },
      { id: 2, value: 34 },
      { id: 3, value: 45 },
      { id: 4, value: 90 },
    ],
  };

  handleDelete =() => {
      console.log("Event Handler called");
  }
  render() {
    return (
      <div>
        {this.state.Counter.map(counter => {
          console.log("Parent", counter.value);
          return (
            <RaisingandHandlingEventsChild
              key={counter.id}
              onDelete = {this.handleDelete}
              value={counter.value} 
            ></RaisingandHandlingEventsChild>
          );
        })}
      </div>
    );
  }
}

export default RaisingandHandlingEventsParent;
