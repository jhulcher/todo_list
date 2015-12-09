var React = require("react"),
    TodoStore = require("./../stores/todo_store.js"),
    TodoListItem = require("./todo_list_item")

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
      <div>{
          this.state.todos.map (function (todo, index) {
            return (
              <TodoListItem key={index} todo={todo}/>
            );
          })
      }</div>
    );
  }

});

module.exports = TodoList;
