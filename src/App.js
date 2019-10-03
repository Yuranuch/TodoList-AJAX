import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addItem, addTodoList} from "./redux/reducer";

class App extends React.Component {

    state = {
        nextTodoListId: 3,
    }

    addItem = (newText) => {
        let newTodoList = {id: this.props.nextTodoListId, title: newText}
        this.props.addTodoList(newTodoList)
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
        }
    }
}

const AppContainer = connect (mapStateToProps, mapDispatchToProps)(App)

export default AppContainer;

