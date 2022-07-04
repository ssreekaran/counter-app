import { wait } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import Counter from "./counter";

class ToggleAddRemove extends Component {
  state = { status: false, switchButton: "Add" };

  handleClick() {
    this.setState(
      {
        status: !this.state.status,
        switchButton: !this.state.status ? "Remove" : "Add",
      },
      () => {
        if (this.state.status) {
          this.props.onAdd(this.props.key);
        } else {
          this.props.onDelete(this.props.key);
        }
      }
    );
  }
  render() {
    return (
      <button onClick={() => this.handleClick()}>
        {this.state.switchButton}
      </button>
    );
  }
}

export default ToggleAddRemove;
