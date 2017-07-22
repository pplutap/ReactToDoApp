var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TextUtils = require('react-addons-test-utils');

var ToDoList = require('ToDoList');
var ToDo = require('ToDo');

describe('ToDoList', () => {
    it('should exists', () => {
        expect(ToDoList).toExist();
    });

    it('should render one ToDo component for each todo item', () => {
        var todos = [{
            id: 1,
            text: 'Do something'
        }, {
            id: 2,
            text: 'Check all'
        }];
        var todoList = TextUtils.renderIntoDocument(<ToDoList todos={todos}/>);
        var todosComponents = TextUtils.scryRenderedComponentsWithType(todoList, ToDo);

        expect(todosComponents.length).toBe(todos.length);
    });


});