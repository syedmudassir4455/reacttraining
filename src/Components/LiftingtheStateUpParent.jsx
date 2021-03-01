import React, { Component } from "react";
import LiftingtheStateUpChild from "./LiftingtheStateUpChild";

class LiftingtheStateUpParent extends Component {
 
 
  render() {
   const {onReset, onDelete, onIncrement, counters} = this.props;
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={()=>onReset()}
        >
          Reset
        </button>
        {counters.map((counter) => {
    
          return (
            <LiftingtheStateUpChild
              key={counter.id}
              onDelete={onDelete}
              counter={counter}
              onIncrement={onIncrement}/>
          );
        })}
      </div>
    );
  }
}

export default LiftingtheStateUpParent;
