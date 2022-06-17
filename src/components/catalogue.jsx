import React, { Component } from "react";
import apple from "./fruits/apple.png";
import apricot from "./fruits/apricot.png";
import banana from "./fruits/banana.png";
import cherry from "./fruits/cherry.png";
import grapes from "./fruits/grapes.png";
import lemon from "./fruits/lemon.png";
import orange from "./fruits/orange.png";

class Catalogue extends Component {
  render() {
    return (
      <div>
        <img src={apple} alt="Apple" height={100} width={100} />
        <img src={apricot} alt="Apricot" height={100} width={100} />
        <img src={banana} alt="Banana" height={100} width={100} />
        <img src={cherry} alt="Cherry" height={100} width={100} />
        <img src={grapes} alt="Grapes" height={100} width={100} />
        <img src={lemon} alt="Lemon" height={100} width={100} />
        <img src={orange} alt="Orange" height={100} width={100} />
      </div>
    );
  }
}

export default Catalogue;
