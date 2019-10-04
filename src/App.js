import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addItem, addTodoList, setTodolists} from "./redux/reducer";
import * as axios from "axios";

class App extends React.Component {

    componentDidMount() {
        this.restoreState();
    }

    state = {
        nextTodoListId: 3,
    }

    addItem = (newText) => {
        let newTodoList = {id: this.props.nextTodoListId, title: newText, tasks:[]}
        this.props.addTodoList(newTodoList)
    }

    restoreState = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/todo-lists",
            {withCredentials: true, headers: {"API-KEY":"2712bbc4-99c4-4494-954c-6bd0564807d4"}})
            .then(res=> {
                debugger
                this.props.setTodolists(res.data)
            })
    }

    render = () => {
        let todolistElements = this.props.todolists.map(tl => <TodoList id={tl.id} title={tl.title} tasks={tl.tasks}/>)
        return (
            <div>
                <AddNewItemForm
                    addItem={this.addItem}/>
                <div className="App">
                    {todolistElements}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        todolists: state.todolists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodoList: (newTodoList) => {
            dispatch(addTodoList(newTodoList))
        },
        setTodolists: (newTodolists) => {
            dispatch (setTodolists(newTodolists))
        }
    }
}

const AppContainer = connect (mapStateToProps, mapDispatchToProps)(App)

export default AppContainer;

