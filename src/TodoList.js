import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTask, updateTask} from "./redux/reducer";

class TodoList extends React.Component {
    componentDidMount() {
        this.restoreState()
    }
    state = {
        filterValue: "All",
        nextTaskId: 4,
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("our-state" + this.props.id, stateAsString)
    }

    restoreState = () => {
        let state = {
            tasks: [],
            filterValue: "All",
            nextTaskId: 0,
        }
        let stateAsString = localStorage.getItem("our-state" + this.props.id)
        if (stateAsString != null) {
            state = JSON.parse(stateAsString)
        }
        this.setState(state)
    }

    addItem = (newText) => {
        let newTask = {id: this.state.nextTaskId++, title: newText, isDone: true, priority: "High"}
        this.props.addTask(this.props.id, newTask)
    }

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        }, () => {
            this.saveState()
        })
    }

    changeTask = (taskId, obj) => {
        this.props.updateTask(taskId, obj, this.props.id)
    }

    changeStatus = (taskId, status) => {
        this.changeTask(taskId, {isDone: status})
    }

    changeTitle = (taskId, newTitle) => {
        this.changeTask(taskId, {title: newTitle})
    }

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListTitle title={this.props.title}/>
                    <button>X</button>
                    <AddNewItemForm
                        addItem={this.addItem}
                    />

                    <TodoListTasks
                        changeTitle={this.changeTitle}
                        changeStatus={this.changeStatus}
                        tasks={this.props.tasks.filter(t => {
                            if (this.state.filterValue === "All") {
                                return t
                            }
                            if (this.state.filterValue === "Completed") {
                                return t.isDone === true
                            }
                            if (this.state.filterValue === "Active") {
                                return t.isDone === false
                            }
                        })}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (todoListId, newTask) => {
            dispatch(addTask(todoListId, newTask))
        },
        updateTask: (taskId, obj, todolistId) => {
            dispatch(updateTask(taskId, obj, todolistId))
        }
    }
}

const TodoListContainer = connect(null, mapDispatchToProps)(TodoList)

export default TodoListContainer;

