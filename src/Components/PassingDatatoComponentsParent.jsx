import React, { Component } from "react";
import PassingDatatoComponentsChild from "../Components/PassingDatatoComponentsChild";

class PassingDatatoComponentsParent extends Component {
  state = {
    Counters: [
      { id: 1, value: 3 },
      { id: 2, value: 5 },
      { id: 3, value: 10 },
      { id: 4, value: 0 },
    ],
  };

  render() {
    //we are showing props property
    console.log(this.props)
    return (
      <div>
        {this.state.Counters.map((Counter) => {
          console.log("Parent" + Counter.value);
          return (
            <PassingDatatoComponentsChild
              value={Counter.value}
              key={Counter.id} id = {Counter.id}
            >
             {/* <h4>Title </h4> */} {/*we are making*/}
             {/* <h4>Counter #{Counter.id}</h4>  */}
            </PassingDatatoComponentsChild>
          );
        })}
      </div>
    );
  }
}

export default PassingDatatoComponentsParent;
