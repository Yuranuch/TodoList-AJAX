import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addItem, addTodoList, setTodolists} from "./redux/reducer";
import * as axios from "axios";
import {api} from "./api";

class App extends React.Component {

    componentDidMount() {
        this.restoreState();
    }

    state = {
        nextTodoListId: 3,
    }

    addItem = (title) => {
       api.createTodoList (title)
            .then (res => {
                this.props.addTodoList(res.data.data.item)
            })

    }

    restoreState = () => {
        api.getTodoLists()
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

