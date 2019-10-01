import React from 'react';
import './App.css';

class TodoListTask extends React.Component {
    onChangeStatus = (e) => {
        let status=e.currentTarget.checked
        this.props.changeStatus(status)
    }

    render = () => {
        return (
            <div className="todoList-task">
                <input onChange={this.onChangeStatus} type="checkbox" checked={this.props.task.isDone}/>
                <span>{this.props.task.title} </span>
                <span> priority - {this.props.task.priority} </span>
            </div>
        );
    }
}

export default TodoListTask;