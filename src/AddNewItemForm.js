import React from 'react';
import './App.css';

class AddNewItemForm extends React.Component {

    state = {
        error: false
    }
    onAddItem = () => {
        if(!this.props.taskValue) {
            this.setState({
                error: true
            })
        }else {
            this.setState({
                error: false
            })
            this.props.addItem()
        }
    }
    onItemChange = (e) => {
        let newValue = e.currentTarget.value
        this.props.changeTaskValue(newValue)
        this.setState({
            error: false
        })
    }
    onKeyPress = (e) => {
        if(e.key==="Enter") {
            this.props.addItem()
        }
    }

    render = () => {
        let classForError=this.state.error? "error": ""
        return (
            <div className="todoList-header">
                <div className="todoList-newTaskForm">
                    <input onKeyPress={this.onKeyPress} className={classForError} value={this.props.taskValue} onChange={this.onItemChange} type="text" placeholder="New task name"/>
                    <button onClick={this.onAddItem}>Add</button>
                </div>
            </div>
        );
    }
}

export default AddNewItemForm;