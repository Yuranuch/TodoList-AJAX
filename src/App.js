import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";

class App extends React.Component {

    state = {
        todolists: [
            {id: 0, title: "React"},
            {id: 1, title: "HTML"},

        ],
        nextTodoListId: 3,
        taskValue: "",
    }

    addItem = () => {
        let newTodoList = {id: this.state.nextTodoListId++, title: this.state.taskValue}
        let todolistsCopy = [...this.state.todolists, newTodoList]
        this.setState({
            todolists: todolistsCopy
        })
    }
    changeTaskValue = (newValue) => {
        this.setState({
            taskValue: newValue
        })
    }

    render = () => {

        let todolistElements = this.state.todolists.map(tl => <TodoList id={tl.id} title={tl.title}/>)
        return (
            <div>
                <AddNewItemForm
                    changeTaskValue={this.changeTaskValue}
                    taskValue={this.state.taskValue}
                    addItem={this.addItem}/>
                <div className="App">
                    {todolistElements}
                </div>
            </div>
        );
    }
}

export default App;

