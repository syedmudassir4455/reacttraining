import React, { Component } from "react";
import RemovingtheLocalStateChild from "./RemovingtheLocalStateChild";

class RemovingtheLocalStateParent extends Component {
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
    this.setState({ Counter });
  };

  handleIncrement = (counter) => {
    //   console.log(counter)

    const Counter = [...this.state.Counter];
    const index = Counter.indexOf(counter);
    Counter[index] = {...counter};
    Counter[index].value++;
    // console.log(this.state.Counter[0]);
    this.setState({Counter})
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
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.Counter.map((counter) => {
          console.log("Parent", counter.value);
          return (
            <RemovingtheLocalStateChild
              key={counter.id}
              onDelete={this.handleDelete}
              value={counter.value}
              counter={counter}
              onIncrement={this.handleIncrement}
            ></RemovingtheLocalStateChild>
          );
        })}
      </div>
    );
  }
}

export default RemovingtheLocalStateParent;
