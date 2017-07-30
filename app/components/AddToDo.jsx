var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddToDo = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var newToDo = this.refs.todo.value;
        var {dispatch} = this.props;
        if (newToDo.length > 0) {
            this.refs.todo.value = '';
            dispatch(actions.startAddTodo(newToDo));
        } else {
            this.refs.todo.focus();
        }
    },
    render: function () {
        return (
            <div className="container__footer">
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="todo" placeholder="Enter new To Do"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
});

export default connect()(AddToDo);