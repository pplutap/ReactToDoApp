var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TextUtils = require('react-addons-test-utils');

var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
    it('should exists', () => {
        expect(ToDoApp).toExist();
    });

    it('should add todo to the todos state on handleTodo', () => {
       var todoText = 'testowy tekst';
       var toDoApp = TextUtils.renderIntoDocument(<ToDoApp/>);
       toDoApp.setState({todos: []});
       toDoApp.handleAddTodo(todoText);

       expect(toDoApp.state.todos[0].text).toBe(todoText);
    });

    it('should toggle completed value when handleToggle called', () => {
       var toDoData = {
           id: 11,
           text: 'test',
           completed: false
        };
        var toDoApp = TextUtils.renderIntoDocument(<ToDoApp/>);
        toDoApp.setState({
            todos: [toDoData]
        });

        expect(toDoApp.state.todos[0].completed).toBe(false);
        toDoApp.handleToggle(11);
        expect(toDoApp.state.todos[0].completed).toBe(true);
    });
});