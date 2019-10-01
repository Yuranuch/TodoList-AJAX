import React from 'react';
import './App.css';

class TodoListFooter extends React.Component {
    render = () => {

        let classForAll=this.props.filterValue==="All"? "filterActive" : ""
        let classForCompleted=this.props.filterValue==="Completed"? "filterActive" : ""
        let classForActive=this.props.filterValue==="Active"? "filterActive" : ""

        return (
            <div className="todoList-footer">
                <button className={classForAll}>All</button>
                <button className={classForCompleted}>Completed</button>
                <button className={classForActive}>Active</button>
            </div>

        );
    }
}

export default TodoListFooter;