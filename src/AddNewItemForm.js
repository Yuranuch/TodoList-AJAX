import React from 'react';
import './App.css';

class AddNewItemForm extends React.Component {

    state = {
        error: false,
        taskValue: "",
    }


    onAddItem = () => {
        let newText=this.state.taskValue
        if (!newText) {
            this.setState({
                error: true
            })
        } else {
            this.setState({
                error: false
            })
            this.props.addItem(newText)
        }
    }

    onItemChange = (e) => {
        let newValue = e.currentTarget.value

        this.setState({
            error: false,
            taskValue: newValue
        })
    }
    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.props.addItem()
        }
    }

    render = () => {
        let classForError = this.state.error ? "error" : ""
        return (
            <div className="todoList-header">
                <div className="todoList-newTaskForm">
                    <input onKeyPress={this.onKeyPress} className={classForError} value={this.state.taskValue}
                           onChange={this.onItemChange} type="text" placeholder="New task name"/>
                    <button onClick={this.onAddItem}>Add</button>
                </div>
            </div>
        );
    }
}

export default AddNewItemForm;