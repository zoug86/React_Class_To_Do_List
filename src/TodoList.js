import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.addTask = this.addTask.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }
    addTask(task) {
        let newTask = { ...task, id: uuid() }
        this.setState(state => ({
            todos: [...this.state.todos, newTask]
        }));
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => (todo.id !== id))
        })

    }
    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask };
            }
            return todo;
        })

        this.setState({ todos: updatedTodos });

    }

    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        })

        this.setState({ todos: updatedTodos });
    }
    render() {
        let todos = this.state.todos.map(todo => (
            <Todo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                removeTodo={this.remove}
                updateTodo={this.update}
                completed={todo.completed}
                toggleTodo={this.toggleCompletion} />

        ));
        return (
            <div className="TodoList">
                <h1>Todo List! <span>A simple React Todo List App</span></h1>
                <ul>
                    {todos}
                </ul>
                <NewTodoForm addTask={this.addTask} />
            </div>
        )
    }
}

export default TodoList;