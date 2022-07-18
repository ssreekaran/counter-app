import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Catalogue from "./components/catalogue";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      //{ id: 1, value: 1 },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
    }
    this.setState({ counters });
  };

  handleAdd = () => {
    this.setState((previousState) => ({
      counters: [
        ...previousState.counters,
        { id: previousState.counters.length + 1, value: 0 },
      ],
    }));
  };

  handleAddId = (counterID) => {
    this.setState((previousState) => ({
      counters: [...previousState.counters, { id: counterID, value: 1 }],
    }));
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
          />
          <Catalogue
            counters={this.state.counters}
            onAdd={this.handleAddId}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
