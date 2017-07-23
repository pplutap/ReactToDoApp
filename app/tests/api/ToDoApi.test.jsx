var expect = require('expect');

var ToDoApi = require('ToDoApi');

describe('ToDoApi', () => {
    beforeEach(() => {
       localStorage.removeItem('todos');
    });
   it('should exist', () => {
       expect(ToDoApi).toExist();
   });

   describe('setTodos', () => {
    it('should set valid todos array', () => {
       var todos = [{
           id: 23,
           text: 'test file',
           completed: false
       }];
       ToDoApi.setToDos(todos);

       var actualTodos = JSON.parse(localStorage.getItem('todos'));
       expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
       var badTodos = {a: 'b'};
       ToDoApi.setToDos(badTodos);

       expect(localStorage.getItem('todos')).toBe(null);
    });
   });

   describe('getTodos', () => {
       it('should return empyt array for bad localStorage data', () => {
           var actualTodos = ToDoApi.getToDos();
           expect(actualTodos).toEqual([]);
       });

       it('should return todos if valid array in localStorage', () => {
           var todos = [{
               id: 23,
               text: 'test file',
               completed: false
           }];
           localStorage.setItem('todos', JSON.stringify(todos));
           var actualTodos = ToDoApi.getToDos();
           expect(actualTodos).toEqual(todos);
       });
   });
});