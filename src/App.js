import React from 'react';
import './App.css';
import TodoList from "./TodoList";

class App extends React.Component {


    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                   <TodoList id={0}/>
                   <TodoList id={1}/>
                </div>
            </div>
        );
    }
}

export default App;

