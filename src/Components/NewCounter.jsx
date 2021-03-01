import React, { Component } from "react";
import ComposingComponents from "../ComposingComponents";

class NewCounters extends Component {
  state = {
    Counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.Counters.map((Counter) => {
          return <ComposingComponents key={Counter.id}></ComposingComponents>;
        })}
      </div>
    );
  }
}

export default NewCounters;
