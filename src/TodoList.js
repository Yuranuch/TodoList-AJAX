import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTask, deleteTask, deleteTodoList, setTasks, updateTask} from "./redux/reducer";
import * as axios from "axios";

class TodoList extends React.Component {
    componentDidMount() {
        this.restoreState()
    }
    state = {
        filterValue: "All",
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("our-state" + this.props.id, stateAsString)
    }

    // _restoreState = () => {
    //     let state = {
    //         tasks: [],
    //         filterValue: "All",
    //         nextTaskId: 0,
    //     }
    //     let stateAsString = localStorage.getItem("our-state" + this.props.id)
    //     if (stateAsString != null) {
    //         state = JSON.parse(stateAsString)
    //     }
    //     this.setState(state)
    // }

    restoreState = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/todo-lists/${this.props.id}/tasks`,
            {withCredentials: true, headers: {"API-KEY":"2712bbc4-99c4-4494-954c-6bd0564807d4"}})
            .then (res => {
                let allTasks = res.data.items;
                this.props.setTasks(allTasks, this.props.id);
            })
    }

    addItem = (newText) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/todo-lists/${this.props.id}/tasks`, {title: newText},
            {withCredentials: true, headers: {"API-KEY":"2712bbc4-99c4-4494-954c-6bd0564807d4"}})
            .then (res => {
                this.props.addTask(this.props.id, res.data.data.item)
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
        this.props.updateTask(taskId, obj, this.props.id)
    }

    changeStatus = (taskId, status) => {
        this.changeTask(taskId, {isDone: status})
    }

    changeTitle = (taskId, newTitle) => {
        this.changeTask(taskId, {title: newTitle})
    }

    onDeleteTodoList = () => {

        axios.delete(`https://social-network.samuraijs.com/api/1.0/todo-lists/${this.props.id}`,
            {withCredentials: true, headers: {"API-KEY": "2712bbc4-99c4-4494-954c-6bd0564807d4"}})
            .then(res => {
                this.props.deleteTodoList(this.props.id)
            })
    }

    onDeleteTask = (taskId) => {
        debugger
        axios.delete(`https://social-network.samuraijs.com/api/1.0/todo-lists/tasks/${taskId}`,
            {withCredentials: true, headers: {"API-KEY": "2712bbc4-99c4-4494-954c-6bd0564807d4"}})
            .then (res=> {
                this.props.deleteTask(taskId, this.props.id)
            })

    }

    render = () => {
        let {tasks=[]}=this.props
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListTitle title={this.props.title}/>
                    <button onClick={this.onDeleteTodoList}>X</button>
                    <AddNewItemForm
                        addItem={this.addItem}
                    />

                    <TodoListTasks
                        changeTitle={this.changeTitle}
                        onDeleteTask={this.onDeleteTask}
                        changeStatus={this.changeStatus}
                        tasks={tasks.filter(t => {
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
        },
        deleteTodoList: (todolistId) => {
            dispatch(deleteTodoList(todolistId))
        },
        deleteTask: (taskId, todolistId) => {
            dispatch(deleteTask(taskId, todolistId))
        },
        setTasks: (tasks, todolistId) => {
            dispatch(setTasks(tasks, todolistId))
        }
    }
}

const TodoListContainer = connect(null, mapDispatchToProps)(TodoList)

export default TodoListContainer;

