var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
import * as actions from 'actions';
var {AddToDo} = require('AddToDo');

describe('AddToDo', () => {
   it('should exist', () => {
      expect(AddToDo).toExist();
   });

   it('should dispatch ADD_TODO with valid todo text', () => {
      var todoText = 'jakis tekst';
      var action = actions.startAddTodo(todoText);
      var spy = expect.createSpy();
      var addToDo = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addToDo));

      addToDo.refs.todo.value = todoText;
      TestUtils.Simulate.submit($el.find('form')[0]);
      expect(spy).toHaveBeenCalledWith(action);
   });

   it('should not dispatch ADD_TODO with invalid todo text', () => {
      var spy = expect.createSpy();
      var addToDo = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addToDo));

      addToDo.refs.todo.value = '';
      TestUtils.Simulate.submit($el.find('form')[0]);
      expect(spy).toNotHaveBeenCalled();
   });
});