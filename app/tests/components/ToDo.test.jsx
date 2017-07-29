var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TextUtils = require('react-addons-test-utils');

var {ToDo} = require('ToDo');

describe('ToDo', () => {
    it('should exists', () => {
        expect(ToDo).toExist();
    });

    it('should dispatch TOGGLE_TODO action on click', () => {
        var toDoData = {
            id: 100,
            text: 'test',
            completed: true
        };
        var spy = expect.createSpy();
        var toDo = TextUtils.renderIntoDocument(<ToDo {...toDoData} dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(toDo));
        TextUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith({
            type: 'TOGGLE_TODO',
            id: toDoData.id
        });
    });
});