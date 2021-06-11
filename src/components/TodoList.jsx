import React, { Component } from "react";

class TodoList extends Component {
  state = {
    list: [],
  };
  HandleAdd = (e) => {
    e.preventDefault();
    if (e.target.task.value === "") {
      window.alert("empty input");
    } else {
      const NewList = [...this.state.list];
      NewList.push({
        id: Math.random(),
        phrase: e.target.task.value,
      });

      this.setState({ list: NewList });
    }
    e.target.task.value = "";
  };

  HandleDelete = (id) => {
    const ListNew = [...this.state.list];
    const list = ListNew.filter((f) => f.id !== id);
    this.setState({ list });
  };

  render() {
    const length = this.state.list.length;
    const task = length ? (
      this.state.list.map((l) => {
        return (
          <li key={l.id}>
            {l.phrase}{" "}
            <i
              class="fas fa-trash-alt"
              onClick={() => this.HandleDelete(l.id)}
            ></i>
          </li>
        );
      })
    ) : (
      <p>No todos</p>
    );
    return (
      <section>
        <form onSubmit={this.HandleAdd}>
          <label htmlFor="">Put your todo</label>
          <input type="text" name="task"></input>
          <button>Add</button>
        </form>
        {task}
      </section>
    );
  }
}

export default TodoList;
