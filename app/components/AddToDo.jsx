var React = require('react');

var ToDo = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var newToDo = this.refs.todo.value;

        if (newToDo.length > 0) {
            this.refs.todo.value = '';
            this.props.onAdd(newToDo);
        } else {
            this.refs.todo.focus();
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="todo" placeholder="Enter new To Do"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
});

module.exports = ToDo;