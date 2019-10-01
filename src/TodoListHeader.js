import React from 'react';
import './App.css';

class TodoListHeader extends React.Component {


    onAddTask = () => {
        this.props.addTask()
    }
    onTaskChange = (e) => {
        let newValue = e.currentTarget.value
        this.props.changeTaskValue(newValue)
    }


    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input value={this.props.taskValue} onChange={this.onTaskChange} type="text" placeholder="New task name"/>
                    <button onClick={this.onAddTask}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;