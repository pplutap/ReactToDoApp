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

   describe('filterTodos', () => {
      var todos = [{
         id: 1,
         text: 'some text',
         completed: true
      }, {
          id: 2,
          text: 'other text',
          completed: false
      }, {
          id: 3,
          text: 'some text',
          completed: true
      }];

      it('should return all items if showCompleted is true', () => {
          var filteredTodos = ToDoApi.filterTodos(todos, true, '');
          expect(filteredTodos.length).toBe(3);
      });

      it('should return only not completed items', () => {
          var filteredTodos = ToDoApi.filterTodos(todos, false, '');
          expect(filteredTodos.length).toBe(1);
      });

      it('should sort by completed status', () => {
         var filteredTodos = ToDoApi.filterTodos(todos, true, '');
         expect(filteredTodos[0].completed).toBe(false);
      });

       it('should filter todos by searchText', () => {
           var filteredTodos = ToDoApi.filterTodos(todos, true, 'some');
           expect(filteredTodos.length).toBe(2);
       });

       it('should return all todos if searchText is empty', () => {
           var filteredTodos = ToDoApi.filterTodos(todos, true, '');
           expect(filteredTodos.length).toBe(3);
       });
   });
});