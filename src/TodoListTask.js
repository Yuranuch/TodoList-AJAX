import React from 'react';
import './App.css';

class TodoListTask extends React.Component {

    state = {
        editMode: false,

    }

    onChangeStatus = (e) => {
        let status=e.currentTarget.checked
        this.props.changeStatus(this.props.task.id, status)
    }

    onEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,

        })
    }
    onChangeTitle = (e) => {
        let newTitle=e.currentTarget.value
        this.props.changeTitle(this.props.task.id, newTitle)
    }
    onDeleteTask = () => {
        this.props.onDeleteTask(this.props.task.id)
    }


    render = () => {
        let classForDone = this.props.task.isDone? "todoList-task done": "todoList-task"
        return (
            <div className={classForDone}>
                <span>{this.props.task.id}</span>
                <input onChange={this.onChangeStatus} type="checkbox" checked={this.props.task.isDone}/>
                {this.state.editMode?
                    <input
                        onBlur={this.deactivateEditMode}
                        onChange={this.onChangeTitle}
                        type="text"
                        autoFocus={true}
                        value={this.props.task.title}
                    />
                    :<span onClick={this.onEditMode}>{this.props.task.title}</span>}

                <span> priority - {this.props.task.priority} </span>
                <button onClick={this.onDeleteTask}>X</button>
            </div>
        );
    }
}

export default TodoListTask;