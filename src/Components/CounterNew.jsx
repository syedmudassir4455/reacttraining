import React, { Component } from "react";

class CounterNew extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  };
  render() {
    return <img src={this.state.imageUrl} alt="" />;
  }
}

export default CounterNew;
