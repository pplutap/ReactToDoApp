var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var AddToDo = require('AddToDo');

describe('AddToDo', () => {
   it('should exist', () => {
      expect(AddToDo).toExist();
   });

   it('should call handleAddTodo if valid text entered', () => {
      var spy = expect.createSpy();
      var addToDo = TestUtils.renderIntoDocument(<AddToDo onAdd={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addToDo));

      addToDo.refs.todo.value = 'jakis tekst';
      TestUtils.Simulate.submit($el.find('form')[0]);
      expect(spy).toHaveBeenCalledWith('jakis tekst');
   });

   it('should not call handleAddTodo if invalid text entered', () => {
      var spy = expect.createSpy();
      var addToDo = TestUtils.renderIntoDocument(<AddToDo onAdd={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addToDo));

      addToDo.refs.todo.value = '';
      TestUtils.Simulate.submit($el.find('form')[0]);
      expect(spy).toNotHaveBeenCalled();
   });
});