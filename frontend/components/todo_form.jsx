var React = require("react"),
    TodoStore = require("./../stores/todo_store.js");

var TodoForm = React.createClass({

  getInitialState: function () {
    return {title: "", body: ""};
  },

  updateTitle: function (e) {
    this.setState({title: e.target.value});
  },

  updateBody: function (e) {
    this.setState({body: e.target.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var newTodo = {
      title: this.state.title,
      body: this.state.body
    };

    TodoStore.create(newTodo);

    this.setState({
      title: "",
      body: ""
    });
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.updateTitle}
          value={this.state.title}/>

        <input
          type="text"
          onChange={this.updateBody}
          value={this.state.body}/>

        <input type="submit" value="Add Todo"/>
      </form>
    );
  }

});

module.exports = TodoForm;
