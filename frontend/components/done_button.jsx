var React = require("react"),
    TodoStore = require("./../stores/todo_store.js");

var DoneButton = React.createClass({
  handleDone: function () {
    TodoStore.toggleDone(this.props.todo.id);
  },

  render: function () {
    var value;
    if (this.props.todo.done) {
      value = "Undo";
    } else {
      value = "Done";
    }
    return (
      <input type="submit"
             value={value}
             onClick={this.handleDone}/>
    );
  }
});

module.exports = DoneButton;
