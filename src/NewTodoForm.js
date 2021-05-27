import React, { Component } from 'react';
import './NewTodoForm.css'

class NewTodoFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        console.log();
        if (this.state.task !== '') {
            this.props.addTask({ ...this.state, completed: false });
            this.setState(
                {
                    task: ''
                }
            )
        } else {
            alert("Emtpty Task!");
        }

    }

    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input type="text" id="task" name="task" placeholder="New Todo"
                    value={this.state.task} onChange={this.handleChange} />
                <button>New ToDo</button>
            </form>
        )
    }
}

export default NewTodoFrom;
