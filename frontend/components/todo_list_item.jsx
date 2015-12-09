var React = require("react"),
    TodoStore = require("./../stores/todo_store.js");

var TodoListItem = React.createClass({
  render: function () {
    return (
      <div>
        <div>{this.props.todo.title}</div>
        <div>{this.props.todo.body}</div>
        <br/>
      </div>
    );
  }
});

module.exports = TodoListItem;
