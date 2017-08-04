var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
   describe('searchTextReducer', () => {
      it('should set searchText', () => {
          var action = {
              type: 'SET_SEARCH_TEXT',
              searchText: 'Dog'
          };
          var res = reducers.searchTextReducer(df(''), df(action));

          expect(res).toEqual(action.searchText);
      });

      describe('togglrShowCompleted', () => {
          it('should set toggleShowCompleted', () => {
              var action = {
                  type: 'TOGGLE_SHOW_COMPLETED'
              };
              var res = reducers.showCompletedReducer(df(false), df(action));

              expect(res).toEqual(true);
          })
      });

      describe('todosReducer', () => {
          it('should add new todo', () => {
              var action = {
                  type: 'ADD_TODO',
                  todo: {
                      id: 'ab123',
                      text: 'Something',
                      completed: false,
                      createdAt: 1234
                  }
              };
              var res = reducers.todosReducer(df([]), df(action));

              expect(res.length).toEqual(1);
              expect(res[0]).toEqual(action.todo);
          });

          it('should add existing todos', () => {
              var todos = [{
                  id: '111',
                  text: 'anything',
                  completed: false,
                  competedAt: undefined,
                  createdAt: 33000
              }];
              var action = {
                  type: 'ADD_TODOS',
                  todos
              };
              var res = reducers.todosReducer(df([]), df(action));

              expect(res.length).toEqual(1);
              expect(res[0]).toEqual(todos[0]);
          });

          it('should toggle todo', () => {
             var todos = [{
                 id: '123',
                 text: 'something',
                 completed: true,
                 createdAt: 123,
                 completedAt: 125
             }];
             var updates = {
                 completed: false,
                 completedAt: null
             };
             var action = {
                 type: 'UPDATE_TODO',
                 id: todos[0].id,
                 updates
             };
             var res = reducers.todosReducer(df(todos), df(action));

             expect(res[0].completed).toEqual(updates.completed);
             expect(res[0].completedAt).toEqual(updates.completedAt);
             expect(res[0].text).toEqual(todos[0].text);
          });
      })
   });

   describe('authReducer', () => {
       it('should set uid in auth object', () => {
           var action = {
               type: 'LOGIN',
               uid: 123
           };
           var res = reducers.authReducer(undefined, df(action));
           expect(res.uid).toEqual(action.uid);
       });

       it('should generate empty auth object', () => {
           var authData = {
               uid: 123
           };
           var action = {
               type: 'LOGOUT'
           };
           var res = reducers.authReducer(df(authData), df(action));
           expect(res).toEqual({});
       })
   })
});