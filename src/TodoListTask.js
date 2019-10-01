import React from 'react';
import './App.css';

class TodoListTask extends React.Component {
    onChangeStatus = (e) => {
        let status=e.currentTarget.checked
        this.props.changeStatus(this.props.task.id, status)
    }


    render = () => {
        let classForDone = this.props.task.isDone? "todoList-task done": "todoList-task"
        return (
            <div className={classForDone}>
                <span>{this.props.task.id}</span>
                <input onChange={this.onChangeStatus} type="checkbox" checked={this.props.task.isDone}/>
                <span>{this.props.task.title} </span>
                <span> priority - {this.props.task.priority} </span>
            </div>
        );
    }
}

export default TodoListTask;