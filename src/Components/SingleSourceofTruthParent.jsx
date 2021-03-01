import React, { Component } from "react";
import SingleSourceofTruthChild from "../Components/SingleSourceofTruthChild";

class SingleSourceofTruthParent extends Component {
  state = {
    Counter: [
      { id: 1, value: 10 },
      { id: 2, value: 34 },
      { id: 3, value: 45 },
      { id: 4, value: 90 },
    ],
  };

  handleDelete = (Counterid) => {
    // console.log("Event Handler called",this.props.Counterid);

    const Counter = this.state.Counter.filter(
      (count) => count.id !== Counterid
    );
    this.setState({Counter});
  };

  handleReset = () => {
    const counter = this.state.Counter.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>Reset</button>
        {this.state.Counter.map((counter) => {
          console.log("Parent", counter.value);
          return (
            <SingleSourceofTruthChild
              key={counter.id}
              onDelete={this.handleDelete}
              value={counter.value}
              // id={counter.id}
              counter={counter}
            ></SingleSourceofTruthChild>
          );
        })}
      </div>
    );
  }
}

export default SingleSourceofTruthParent;
