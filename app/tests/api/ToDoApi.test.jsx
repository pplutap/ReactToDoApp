var expect = require('expect');

var ToDoApi = require('ToDoApi');

describe('ToDoApi', () => {
    beforeEach(() => {
       localStorage.removeItem('todos');
    });
   it('should exist', () => {
       expect(ToDoApi).toExist();
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