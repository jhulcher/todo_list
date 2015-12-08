var TodoList = require("./components/todo_list.jsx");
var React = require("react");
var ReactDom = require("react-dom");

window.TodoStore = require('./stores/todo_store.js');

ReactDom.render(
  <TodoList/>,
  document.getElementById("root")
);
