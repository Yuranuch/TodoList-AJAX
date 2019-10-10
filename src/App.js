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

    addItem = (title) => {
        axios.post("https://social-network.samuraijs.com/api/1.0/todo-lists", {title: title},
            {withCredentials: true, headers: {"API-KEY":"2712bbc4-99c4-4494-954c-6bd0564807d4"}})
            .then (res => {
                this.props.addTodoList(res.data.data.item)
            })

    }

    restoreState = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/todo-lists",
            {withCredentials: true, headers: {"API-KEY":"2712bbc4-99c4-4494-954c-6bd0564807d4"}})
            .then(res=> {
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

