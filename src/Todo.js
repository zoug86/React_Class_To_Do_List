import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleRemove() {
        this.props.removeTodo(this.props.id);
    }

    toggleForm() {
        this.setState({
            isEditing: !this.state.isEdting
        });
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleUpdate(evt) {
        evt.preventDefault();
        // take new task data and pass it up tp parent
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isEditing: false });
    }

    handleToggle(evt) {
        this.props.toggleTodo(this.props.id);
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input type='text' name="task" value={this.state.task} onChange={this.handleChange} />
                        <button>Save</button>
                    </form >
                </div>

            )
        } else {
            result = (
                <div className="Todo">
                    <li onClick={this.handleToggle} className={this.props.completed ? "Todo-task completed" : "Todo-task"}>{this.props.task}</li>
                    <div className="Todo-btn">
                        <button onClick={this.toggleForm}><i class='fas fa-pen'></i></button>
                        <button onClick={this.handleRemove}><i class='fas fa-trash'></i></button>
                    </div>


                </div>
            )
        }
        return result;
    }
}

export default Todo;