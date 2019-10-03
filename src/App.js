import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addItem} from "./redux/reducer";

class App extends React.Component {

    state = {
        // todolists: [
        //     {id: 0, title: "React"},
        //     {id: 1, title: "HTML"},
        //
        // ],
        // nextTodoListId: 3,

    }

    addItem = (newText) => {
        let newTodoList = {id: this.props.nextTodoListId, title: newText}
        // let todolistsCopy = [...this.state.todolists, newTodoList]
        // this.setState({
        //     todolists: todolistsCopy
        // })
        this.props.addItem(newTodoList)

    }


    render = () => {

        let todolistElements = this.props.todolists.map(tl => <TodoList id={tl.id} title={tl.title}/>)
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
        nextTodoListId: state.nextTodoListId,
        taskValue: state.taskValue,
        todolists: state.todolists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (newTodoList) => {
            dispatch(addItem(newTodoList))
        }
    }
}

const AppContainer = connect (mapStateToProps, mapDispatchToProps)(App)

export default AppContainer;

