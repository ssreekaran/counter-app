import React, { Component } from "react";
import Counter from "./counter";
import "./counters.css";
class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const { onReset, counters, onDelete, onIncrement, onDecrement, onAdd } =
      this.props;
    return (
      <div class="main-container">
        <div class="right-container">
          <button onClick={onReset} className="btn bg-primary btn-sm m-2">
            Reset
          </button>
        </div>
        <div class="left-container">
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              counter={counter}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
