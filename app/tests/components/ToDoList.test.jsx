var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TextUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');

import {configure} from 'configureStore';
import ConnectedTodoList, {ToDoList} from 'ToDoList';
import ConnectedTodo, {ToDo} from 'ToDo';

describe('ToDoList', () => {
    it('should exists', () => {
        expect(ToDoList).toExist();
    });

    it('should render one ToDo component for each todo item', () => {
        var todos = [{
            id: 1,
            text: 'Do something',
            completed: false,
            completedAt: undefined,
            createdAt: 500
        }, {
            id: 2,
            text: 'Check all',
            completed: false,
            completedAt: undefined,
            createdAt: 500
        }];
        var store = configure({
            todos
        });
        var provider = TextUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        );
        var todoList = TextUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        var todosComponents = TextUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todosComponents.length).toBe(todos.length);
    });

    it('should render empty message if not todos', () => {
        var todos = [];
        var todoList = TextUtils.renderIntoDocument(<ToDoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);
    });


});