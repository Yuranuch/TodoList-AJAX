import React from 'react';
import './App.css';

class TodoListTask extends React.Component {

    state = {
        editMode: false,
        titleTask: this.props.task.title
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
        this.props.changeTitle(this.props.task.id, this.state.titleTask)
        this.setState({
            editMode: false,
        })
    }
    onChangeTitle = (e) => {

        this.setState({
            titleTask: e.currentTarget.value
        })
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
                        value={this.state.titleTask}
                    />
                    :<span onClick={this.onEditMode}>{this.state.titleTask}</span>}

                <span> priority - {this.props.task.priority} </span>
                <button onClick={this.onDeleteTask}>X</button>
            </div>
        );
    }
}

export default TodoListTask;