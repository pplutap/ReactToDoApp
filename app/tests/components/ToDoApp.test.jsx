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
});