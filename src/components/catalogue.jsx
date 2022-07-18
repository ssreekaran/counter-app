import React, { Component } from "react";
import "./flex.css";
import apple from "./fruits/apple.png";
import apricot from "./fruits/apricot.png";
import banana from "./fruits/banana.png";
import cherry from "./fruits/cherry.png";
import grapes from "./fruits/grapes.png";
import lemon from "./fruits/lemon.png";
import orange from "./fruits/orange.png";
import strawberry from "./fruits/strawberry.png";
import ToggleAddRemove from "./toggleAddRemove";

class Catalogue extends Component {
  render() {
    return (
      <div class="flex-container">
        <div>
          <img src={apple} alt="Apple" height={100} width={100} />
          <ToggleAddRemove
            id={"Apple"}
            onAdd={this.props.onAdd}
            onDelete={this.props.onDelete}
          />
        </div>
        <div>
          <img src={apricot} alt="Apricot" height={100} width={100} />
          <ToggleAddRemove
            id={"Apricot"}
            onAdd={this.props.onAdd}
            onDelete={this.props.onDelete}
          />
        </div>
        <div>
          <img src={banana} alt="Banana" height={100} width={100} />
          <ToggleAddRemove
            id={"Banana"}
            onAdd={this.props.onAdd}
            onDelete={this.props.onDelete}
          />
        </div>
        <div>
          <img src={cherry} alt="Cherry" height={100} width={100} />
          <ToggleAddRemove
            id={"Cherry"}
            onAdd={this.props.onAdd}
            onDelete={this.props.onDelete}
          />
        </div>
        <div>
          <img src={grapes} alt="Grapes" height={100} width={100} />
          <ToggleAddRemove
            id={"Grapes"}
            onAdd={this.props.onAdd}
            onDelete={this.props.onDelete}
          />
        </div>
        <div>
          <img src={lemon} alt="Lemon" height={100} width={100} />
          <ToggleAddRemove
            id={"Lemon"}
            onAdd={this.props.onAdd}
            onDelete={this.props.onDelete}
          />
        </div>
        <div>
          <img src={orange} alt="Orange" height={100} width={100} />
          <ToggleAddRemove
            id={"Orange"}
            onAdd={this.props.onAdd}
            onDelete={this.props.onDelete}
          />
        </div>
        <div>
          <img src={strawberry} alt="Strawberry" height={100} width={100} />
          <ToggleAddRemove
            id={"Strawberry"}
            onAdd={this.props.onAdd}
            onDelete={this.props.onDelete}
          />
        </div>
      </div>
    );
  }
}

export default Catalogue;
