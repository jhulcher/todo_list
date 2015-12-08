var React = require("react"),
    TodoStore = require("./../stores/todo_store.js");

var TodoList = React.createClass({
  getInitialState: function () {
    return {
      todos: TodoStore.all()

    };
  },

  componentDidMount: function () {
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },

  componentWillUnmount: function () {
    TodoStore.removeChangedHandler(this.todosChanged);
  },

  todosChanged: function () {
    this.setState({todos: TodoStore.all()})
  },

  render: function () {
    return (
      <div>
        <ul>{
          this.state.todos.map (function (todo) {
            return (
              <li>{todo.title}</li>
            );
          })
        }</ul>
      </div>
    );
  }

});

module.exports = TodoList;
