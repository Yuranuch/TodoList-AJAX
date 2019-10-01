import React from 'react';
import './App.css';

class TodoListFooter extends React.Component {
    onFilterChange =(newFilterValue)=> {
        this.props.changeFilter(newFilterValue)
    }

    render = () => {

        let classForAll=this.props.filterValue==="All"? "filterActive" : ""
        let classForCompleted=this.props.filterValue==="Completed"? "filterActive" : ""
        let classForActive=this.props.filterValue==="Active"? "filterActive" : ""

        return (
            <div className="todoList-footer">
                <button onClick={()=> {this.onFilterChange("All")}} className={classForAll}>All</button>
                <button onClick={()=> {this.onFilterChange("Completed")}} className={classForCompleted}>Completed</button>
                <button onClick={()=> {this.onFilterChange("Active")}} className={classForActive}>Active</button>
            </div>

        );
    }
}

export default TodoListFooter;