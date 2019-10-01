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
        filterValue : "Completed",
        taskValue: "Yura"
    }



    addTask = () => {
       let newTask={title:this.state.taskValue, isDone:true, priority:"High"}
       let newTasks = [...this.state.tasks, newTask]
        this.setState({
            tasks : newTasks
        })
    }

    changeTaskValue = (newValue) => {
        this.setState({
            taskValue: newValue
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
                    <TodoListHeader changeTaskValue={this.changeTaskValue} taskValue={this.state.taskValue} addTask={this.addTask}/>
                    <TodoListTasks tasks={this.state.tasks}/>
                    <TodoListFooter changeFilter={this.changeFilter}  filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

