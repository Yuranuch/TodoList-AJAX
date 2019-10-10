import React from 'react';
import './App.css';

class TodoListTitle extends React.Component {

    state = {
        editMode: false,
        todoListTitle: this.props.title
    }

    onEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.changeTodoListTitle(this.state.todoListTitle, this.props.id)
    }
    onChangeTodoListTitle = (e) => {
        let newTitle = e.currentTarget.value
        this.setState({
            todoListTitle: newTitle
        })
    }

    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">
                    {this.state.editMode?<div>
                            <input
                                onBlur={this.deactivateEditMode}
                                autoFocus={true}
                                onChange={this.onChangeTodoListTitle}
                            />
                    </div>
                    :<span onClick={this.onEditMode}>{this.state.todoListTitle}</span>}
                </h3>
            </div>
        );
    }
}

export default TodoListTitle;