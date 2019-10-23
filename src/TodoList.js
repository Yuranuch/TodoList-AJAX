import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import styles from "./TodoList.module.css"
import {addTask, changeTodoListTitle, deleteTask, deleteTodoList, setTasks, updateTask} from "./redux/reducer";
import * as axios from "axios";
import {api} from "./api";

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

    restoreState = () => {
        api.getTasks(this.props.id)
            .then(res => {
                let allTasks = res.data.items;
                this.props.setTasks(allTasks, this.props.id);
            })
    }

    addItem = (newText) => {
        api.createTask(this.props.id, newText)

            .then(res => {

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
        this.props.tasks.forEach(t => {
            if (t.id === taskId) {
                api.updateTask({...t, ...obj})
                    .then(res => {
                        this.props.updateTask(taskId, obj, this.props.id);
                    });
            }
        })

    }

    changeStatus = (taskId, status) => {
        this.changeTask(taskId, {isDone: status})
    }

    changeTitle = (taskId, newTitle) => {
        this.changeTask(taskId, {title: newTitle})
    }

    onDeleteTodoList = () => {
        api.deleteTodoList(this.props.id)
            .then(res => {
                this.props.deleteTodoList(this.props.id)
            })
    }

    onDeleteTask = (taskId) => {
        api.deleteTask(taskId)
            .then(res => {
                this.props.deleteTask(taskId, this.props.id)
            })
    }

    changeTodoListTitle = (newTodoListTitle, todolistId) => {
        axios.put(`https://social-network.samuraijs.com/api/1.0/todo-lists/${todolistId}`, {title: newTodoListTitle},
            {withCredentials: true, headers: {"API-KEY": "2712bbc4-99c4-4494-954c-6bd0564807d4"}})
            .then(res => {
                this.props.changeTodoListTitle(res.data.item, this.props.id)
            })

    }

    render = () => {
        let {tasks = []} = this.props
        return (
            <div className="App">
                <div className={styles.todoList}>

                    <TodoListTitle
                        title={this.props.title}
                        id={this.props.id}
                        changeTodoListTitle={this.changeTodoListTitle}
                    />

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
        },
        changeTodoListTitle: (newTodoListTitle, todolistId) => {
            dispatch(changeTodoListTitle(newTodoListTitle, todolistId))
        }
    }
}

const TodoListContainer = connect(null, mapDispatchToProps)(TodoList)

export default TodoListContainer;

