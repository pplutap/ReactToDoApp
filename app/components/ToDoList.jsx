var React = require('react');
import ToDo from 'ToDo';
var {connect} = require('react-redux');
var ToDoApi = require('ToDoApi');

export var ToDoList = React.createClass({
    render: function () {
        var {showCompleted, searchText, todos} = this.props;
        var renderToDos = () => {
            var filteredTodos = ToDoApi.filterTodos(todos, showCompleted, searchText);
            if (filteredTodos.length === 0) {
                return (
                    <p className="container__message">Nothing to do</p>
                )
            }
            return filteredTodos.map((todo) => {
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