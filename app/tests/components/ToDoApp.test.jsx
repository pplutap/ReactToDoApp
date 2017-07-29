var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TextUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');

var configureStore = require('configureStore');
import {ToDoList} from 'ToDoList';
var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
    it('should exists', () => {
        expect(ToDoApp).toExist();
    });

    it('should render todo list', () => {
        var store = configureStore.configure();
        var provider = TextUtils.renderIntoDocument(
          <Provider store={store}>
              <ToDoApp/>
          </Provider>
        );

        var todoApp = TextUtils.scryRenderedComponentsWithType(provider, ToDoApp)[0];
        var todoList = TextUtils.scryRenderedComponentsWithType(todoApp, ToDoList);

        expect(todoList.length).toEqual(1);
    });
});