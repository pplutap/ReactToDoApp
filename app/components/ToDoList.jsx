var React = require('react');
import ToDo from 'ToDo';
var {connect} = require('react-redux');
var ToDoApi = require('ToDoApi');

export var ToDoList = React.createClass({
    render: function () {
        var {showCompleted, searchText, todos} = this.props;
        var renderToDos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">Nothing to do</p>
                )
            }
            return ToDoApi.filterTodos(todos, showCompleted, searchText).map((todo) => {
                return (
                    <ToDo key={todo.id} {...todo}/>
                );
            });
        };

        return (
            <div>
                {renderToDos()}
            </div>
        )
    }
});

export default connect(
    (state) => {
        return state;
    }
)(ToDoList);