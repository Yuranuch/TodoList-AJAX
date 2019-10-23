import React from 'react';
import './App.css';
import styles from "./TodoListTask.module.css"

class TodoListTask extends React.Component {

    state = {
        editMode: false,
        titleTask: this.props.task.title
    }

    onChangeStatus = (e) => {
        let status = e.currentTarget.checked ? 2 : 0
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
        let priotityTitle = "";
        switch (this.props.task.priority) {
            case 0:
                priotityTitle = "Low";
                break;
            case 1:
                priotityTitle = "Middle";
                break;
            case 2:
                priotityTitle = "High";
                break;
            case 3:
                priotityTitle = "Urgently";
                break;
            case 4:
                priotityTitle = "Later";
                break;
        }

        let classForDone = this.props.task.isDone ? "todoList-task done" : "todoList-task"
        return (

            <div className={styles.task}>
                <div className={classForDone}>
                    {/*<span>{this.props.task.id}</span>*/}

                    {this.state.editMode ?
                        <input
                            onBlur={this.deactivateEditMode}
                            onChange={this.onChangeTitle}
                            type="text"
                            autoFocus={true}
                            value={this.state.titleTask}
                        />
                        : <span onClick={this.onEditMode}>{this.state.titleTask}</span>}
                    {/*<span> priority: {priotityTitle} </span>*/}
                    <button className={styles.delTask} onClick={this.onDeleteTask}>X</button>
                    <input className={styles.changeTaskStatus} onChange={this.onChangeStatus} type="checkbox" checked={this.props.task.isDone == 2}/>
                </div>
            </div>

        );
    }
}

export default TodoListTask;