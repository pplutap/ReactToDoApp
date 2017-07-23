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
       expect(toDoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed value when handleToggle called', () => {
       var toDoData = {
           id: 11,
           text: 'test',
           completed: false,
           createdAt: 0,
           completedAt: undefined
        };
        var toDoApp = TextUtils.renderIntoDocument(<ToDoApp/>);
        toDoApp.setState({
            todos: [toDoData]
        });

        expect(toDoApp.state.todos[0].completed).toBe(false);
        toDoApp.handleToggle(11);
        expect(toDoApp.state.todos[0].completed).toBe(true);
        expect(toDoApp.state.todos[0].completedAt).toBeA('number');
    });

    it('should toggle todo from completed to incompleted', () => {
        var toDoData = {
            id: 11,
            text: 'test',
            completed: true,
            createdAt: 0,
            completedAt: 123
        };
        var toDoApp = TextUtils.renderIntoDocument(<ToDoApp/>);
        toDoApp.setState({
            todos: [toDoData]
        });

        expect(toDoApp.state.todos[0].completed).toBe(true);
        toDoApp.handleToggle(11);
        expect(toDoApp.state.todos[0].completed).toBe(false);
        expect(toDoApp.state.todos[0].completedAt).toNotExist();
    });
});