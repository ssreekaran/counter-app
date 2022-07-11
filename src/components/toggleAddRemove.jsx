import React, { Component } from "react";

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
          this.props.onAdd(this.props.id);
        } else {
          this.props.onDelete(this.props.id);
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
