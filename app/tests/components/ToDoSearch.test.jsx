var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TextUtils = require('react-addons-test-utils');

// var ToDoSearch = require('ToDoSearch');
import {ToDoSearch} from 'ToDoSearch';
var ToDo = require('ToDo');

describe('ToDoSearch', () => {
    it('should exists', () => {
        expect(ToDoSearch).toExist();
    });

    it('should dispatch SET_SEARCH_TEXT on input change', () => {
        var searchText = 'dog';
        var spy = expect.createSpy();
        var toDoSearch = TextUtils.renderIntoDocument(<ToDoSearch dispatch={spy}/>);

       toDoSearch.refs.searchText.value = searchText;
       TextUtils.Simulate.change(toDoSearch.refs.searchText);
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText
        };
       expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
        var spy = expect.createSpy();
        var toDoSearch = TextUtils.renderIntoDocument(<ToDoSearch dispatch={spy}/>);
        toDoSearch.refs.showCompleted.checked = true;
        TextUtils.Simulate.change(toDoSearch.refs.showCompleted);
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };

        expect(spy).toHaveBeenCalledWith(action);
    });
});