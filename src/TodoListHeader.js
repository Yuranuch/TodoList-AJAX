import React from 'react';
import './App.css';

class TodoListHeader extends React.Component {

    state = {
        error: false
    }
    onAddTask = () => {

        if(!this.props.taskValue) {
            this.setState({
                error: true
            })
        }else {
            this.setState({
                error: false
            })
            this.props.addTask()
        }
    }
    onTaskChange = (e) => {
        let newValue = e.currentTarget.value
        this.props.changeTaskValue(newValue)
        this.setState({
            error: false
        })
    }
    onKeyPress = (e) => {
        if(e.key==="Enter") {
            this.props.addTask()
        }
    }

    render = () => {
        let classForError=this.state.error? "error": ""
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input onKeyPress={this.onKeyPress} className={classForError} value={this.props.taskValue} onChange={this.onTaskChange} type="text" placeholder="New task name"/>
                    <button onClick={this.onAddTask}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;