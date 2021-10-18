import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    // ES7 no use of constructor
    persons: [
      { name: "Avi", age: 37 },
      { name: "Avinash", age: 47 },
      { name: "Aryan", age: 25 },
    ],
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Anu", age: 21 },
        { name: "Anuradha", age: 24 },
        { name: "Radha", age: 15 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Anu", age: 21 },
        { name: event.target.value, age: 24 },
        { name: "Radha", age: 15 },
      ],
    });
  };
  render() {
    const style = {
      // inline styling
      backgroundColor: "white",
      font: "inherit",
      border: " 1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <button style={style} onClick={this.switchNameHandler}>
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
