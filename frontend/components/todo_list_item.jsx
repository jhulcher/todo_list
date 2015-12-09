var React = require("react"),
    TodoStore = require("./../stores/todo_store.js"),
    DoneButton = require("./done_button");

var TodoListItem = React.createClass({
  handleDestroy: function (e) {
    TodoStore.destroy(this.props.todo.id);
  },

  render: function () {
    return (
      <div>
        <div>{this.props.todo.title}</div>
        <div>{this.props.todo.body}</div>
        <DoneButton todo={this.props.todo}/>
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
