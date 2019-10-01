import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListHeader from "./TodoListHeader";

class App extends React.Component {

    state = {
        tasks : [
            {title:"React", isDone:true, priority:"High"},
            {title:"JS", isDone:true, priority:"High"},
            {title:"CSS", isDone:true, priority:"Low"},
            {title:"HTML", isDone:false, priority:"High"},
        ],
        filterValue : "Completed"
    }



    addTaskClick = () => {
       let newTask={title:"JS", isDone:true, priority:"High"}
       let newTasks = [...this.state.tasks, newTask]
        this.setState({
            tasks : newTasks
        })
    }
    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue : newFilterValue
        })
    }


    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input type="text" placeholder="New task name"/>
                            <button onClick={this.addTaskClick}>Add</button>
                        </div>
                    </div>


                    {/*<TodoListHeader addTask={this.addTask}/>*/}
                    <TodoListTasks tasks={this.state.tasks}/>
                    <TodoListFooter changeFilter={this.changeFilter}  filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

