import React, { Component } from "react";

class MountingPhase extends Component {
  state = {};

  //first Life cycle hook
  constructor(props) {
    super();
    // console.log("first Life cycle hook");
    // console.log("App-constructor", this.props); // MountingPhase.jsx:8 App-constructor undefined
  }

  //second Life cycle hook
  componentDidMount() {
    //Ajax call
    // console.log("second Life cycle hook"); // MountingPhase.jsx:16 second Life cycle hook
    // console.log("App-constructor");
  }

    //third Life cycle hook
  render() {

    // console.log('App-Rendered')
    return <div></div>;
  }
}

export default MountingPhase;
