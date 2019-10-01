import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListHeader from "./TodoListHeader";

class App extends React.Component {

    state = {
        tasks : [
            {id: 0, title:"React", isDone:true, priority:"High"},
            {id: 1, title:"JS", isDone:true, priority:"High"},
            {id: 2, title:"CSS", isDone:true, priority:"Low"},
            {id: 3, title:"HTML", isDone:false, priority:"High"},
        ],
        filterValue : "All",
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

    changeStatus = (taskId, status) => {
        let newTasks = this.state.tasks.map (t=> {
            if(t.id===taskId){
                return{...t, isDone: status }
            }else return t
        })
        this.setState({
            tasks: newTasks
        })
    }


    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader changeTaskValue={this.changeTaskValue} taskValue={this.state.taskValue} addTask={this.addTask}/>
                    <TodoListTasks
                        changeStatus={this.changeStatus}
                        tasks={this.state.tasks.filter(t=> {
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
                    <TodoListFooter changeFilter={this.changeFilter}  filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

