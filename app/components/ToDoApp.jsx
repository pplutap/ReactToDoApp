var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var ToDoApi = require('ToDoApi');

var ToDoApp = React.createClass({
    getInitialState: function () {
      return {
          showCompleted: false,
          searchText: '',
          todos: ToDoApi.getToDos()
      }
    },
    componentDidUpdate: function () {
      ToDoApi.setToDos(this.state.todos);
    },
    handleAddTodo: function (text) {
      this.setState({
          todos: [
              ...this.state.todos,
              {
                  id: uuid(),
                  text: text,
                  completed: false,
                  createdAt: moment().unix(),
                  completedAt: undefined
              }

          ]
      });
    },
    handleToggle: function (id) {
        var updatedTodos = this.state.todos.map(function (item) {
            if (item.id === id) {
                item.completed = !item.completed;
                item.completedAt = item.completed ? moment().unix() : undefined;
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
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = ToDoApi.filterTodos(todos, showCompleted, searchText)

        return (
            <div>
                <ToDoSearch onSearch={this.handleSearch}/>
                <ToDoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <AddToDo onAdd={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = ToDoApp;