import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";

class TodoList extends React.Component {
    componentDidMount() {
        this.restoreState()
    }

    state = {
        tasks: [
            // {id: 0, title: "React", isDone: true, priority: "High"},
            // {id: 1, title: "JS", isDone: true, priority: "High"},
            // {id: 2, title: "CSS", isDone: true, priority: "Low"},
            // {id: 3, title: "HTML", isDone: false, priority: "High"},
        ],
        filterValue: "All",
        taskValue: "",
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
            taskValue: "",
            nextTaskId: 0,
        }
        let stateAsString = localStorage.getItem("our-state" + this.props.id)
        if (stateAsString != null) {
            state = JSON.parse(stateAsString)
        }
        this.setState(state)
    }

    addItem = () => {
        let newTask = {id: this.state.nextTaskId++, title: this.state.taskValue, isDone: true, priority: "High"}
        let newTasks = [...this.state.tasks, newTask]
        this.setState({
            tasks: newTasks
        }, () => {
            this.saveState()
        })
    }

    changeTaskValue = (newValue) => {
        this.setState({
            taskValue: newValue
        }, () => {
            this.saveState()
        })
    }

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        }, () => {
            this.saveState()
        })
    }

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id === taskId) {
                return {...t, ...obj}
            } else return t
        })
        this.setState({
            tasks: newTasks
        }, () => {
            this.saveState()
        })
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
                        changeTaskValue={this.changeTaskValue}
                        taskValue={this.state.taskValue}
                        addItem={this.addItem}
                    />

                    <TodoListTasks
                        changeTitle={this.changeTitle}
                        changeStatus={this.changeStatus}
                        tasks={this.state.tasks.filter(t => {
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

export default TodoList;

