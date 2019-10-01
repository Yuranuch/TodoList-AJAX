import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListHeader from "./TodoListHeader";

class App extends React.Component {

    tasks = [
        {title:"React", isDone:true, priority:"High"},
        {title:"JS", isDone:true, priority:"High"},
        {title:"CSS", isDone:true, priority:"Low"},
        {title:"HTML", isDone:false, priority:"High"},
    ]
    filterValue = "Completed"

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader/>
                    <TodoListTasks tasks={this.tasks}/>
                    <TodoListFooter filterValue={this.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

