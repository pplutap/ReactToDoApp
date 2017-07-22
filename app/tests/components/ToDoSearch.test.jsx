var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TextUtils = require('react-addons-test-utils');

var ToDoSearch = require('ToDoSearch');
var ToDo = require('ToDo');

describe('ToDoSearch', () => {
    it('should exists', () => {
        expect(ToDoSearch).toExist();
    });

    it('should call onSearch with entered input text', () => {
        var searchText = 'dog';
        var spy = expect.createSpy();
        var toDoSearch = TextUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);

       toDoSearch.refs.searchText.value = searchText;
       TextUtils.Simulate.change(toDoSearch.refs.searchText);

       expect(spy).toHaveBeenCalledWith(false, 'dog');
    });

    it('should call onSearch with proper checked value', () => {
        var spy = expect.createSpy();
        var toDoSearch = TextUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);
        toDoSearch.refs.showCompleted.checked = true;
        TextUtils.Simulate.change(toDoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
    });
});