import React, { Component } from "react";
import ExerciseDecrementButtonChild from "./ExerciseDecrementButtonChild";

class ExerciseDecrementButtonParent extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters ,onDecrement} = this.props;
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-1"
          onClick={() => onReset()}
        >
          Reset
        </button>
        {counters.map((counter) => {
          return (
            <ExerciseDecrementButtonChild
              key={counter.id}
              onDelete={onDelete}
              counter={counter}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          );
        })}
      </div>
    );
  }
}

export default ExerciseDecrementButtonParent;
