import React, { Component } from "react";
import TodoList from "./TodoList";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
          <TodoList />
      </div>
    );
  }
}

export default App;
