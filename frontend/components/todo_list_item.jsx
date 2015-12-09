var React = require("react"),
    TodoStore = require("./../stores/todo_store.js");

var TodoListItem = React.createClass({
  handleDestroy: function (e) {
    TodoStore.destroy(this.props.todo.id);
  },

  render: function () {
    return (
      <div>
        <div>{this.props.todo.title}</div>
        <div>{this.props.todo.body}</div>
        <input type="submit"
               value="Delete"
               onClick={this.handleDestroy}
        />
        <br/>
      </div>
    );
  }
});

module.exports = TodoListItem;
