var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var uuid = require('node-uuid');

var ToDoApp = React.createClass({
    getInitialState: function () {
      return {
          showCompleted: false,
          searchText: '',
          todos: [
              {
                  id: uuid(),
                  text: 'Walk the dog',
                  completed: false
              },
              {
                  id: uuid(),
                  text: 'Clean the yard',
                  completed: true
              },
              {
                  id: uuid(),
                  text: 'Wash carpet',
                  completed: true
              },
              {
                  id: uuid(),
                  text: 'Clean windows',
                  completed: false
              }
          ]
      }
    },
    handleAddTodo: function (text) {
      this.setState({
          todos: [
              ...this.state.todos,
              {
                  id: uuid(),
                  text: text,
                  completed: false
              }

          ]
      });
    },
    handleToggle: function (id) {
        var updatedTodos = this.state.todos.map(function (item) {
            if (item.id === id) {
                item.completed = !item.completed;
            }
            return item;
        });
        this.setState({todos : updatedTodos});
    },
    handleSearch: function (showCompleted, searchText) {
      this.setState({
          showCompleted: showCompleted,
          searchText: searchText.toLowerCase()
      })
    },
    render: function () {
        var {todos} = this.state;

        return (
            <div>
                <ToDoSearch onSearch={this.handleSearch}/>
                <ToDoList todos={todos} onToggle={this.handleToggle}/>
                <AddToDo onAdd={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = ToDoApp;