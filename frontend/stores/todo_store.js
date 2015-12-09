var _todos = [];

var _callbacks = [];


var TodoStore = {
  all: function() {
    return _todos.slice();
  },

  fetch: function() {
    $.ajax({
      url: "api/to_dos",
      method: "GET",
      success: function(response) {
        _todos = response;
        TodoStore.changed();
      }
    })
  },

  create: function(todo) {
    $.ajax({
      url: "api/to_dos",
      method: "POST",
      dataType: "json",
      data: {to_do: todo},
      success: function(response) {
        _todos.push(response);
        TodoStore.changed();
      }
    })
  },

  destroy: function(id) {

    // TODO: Could be a helper
    var id, idx;
    _todos.forEach(function (todo, index) {
      if (todo.id === id) {
        idx = index;
        id = todo.id;
      }
    })

    if (typeof idx !== "undefined") {

      $.ajax({
        url: "/api/to_dos/" + id,
        method: "DELETE",
        success: function() {
          _todos.splice(idx, 1);
          TodoStore.changed();
        }
      })
    }
  },

  toggleDone: function(id) {

    // TODO: Could be a helper
    var id, idx, done;
    _todos.forEach(function (todo, index) {
      if (todo.id === id) {
        idx = index;
        id = todo.id;
        done = !todo.done;
      }
    })

    if (typeof idx !== "undefined") {
      $.ajax({
        url: "/api/to_dos/" + id,
        method: "PATCH",
        data: {to_do: {done: done}},
        success: function(updatedTodo) {
          _todos[idx] = updatedTodo;
          TodoStore.changed();
        }
      })
    }
  },

  changed: function() {
    _callbacks.forEach (function (callback) {
      callback();
    })
  },

  addChangedHandler: function(callback) {
    _callbacks.push(callback);
  },

  removeChangedHandler: function(callback) {
    var idx = _callbacks.indexOf(callback);

    if (idx !== -1) {
      _callbacks.splice(idx, 1);
    }
  }


};


module.exports = TodoStore;
