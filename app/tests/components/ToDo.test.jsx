var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TextUtils = require('react-addons-test-utils');

var ToDo = require('ToDo');

describe('ToDo', () => {
    it('should exists', () => {
        expect(ToDo).toExist();
    })
});