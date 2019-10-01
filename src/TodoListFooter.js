import React from 'react';
import './App.css';

class TodoListFooter extends React.Component {

    state = {
        isHidden: false
    }

    onFilterChange =(newFilterValue)=> {
        this.props.changeFilter(newFilterValue)
    }
    onHidden =()=> {
        this.setState({
            isHidden: true
        })
    }
    onShow =()=> {
        this.setState({
            isHidden: false
        })
    }

    render = () => {

        let classForAll=this.props.filterValue==="All"? "filterActive" : ""
        let classForCompleted=this.props.filterValue==="Completed"? "filterActive" : ""
        let classForActive=this.props.filterValue==="Active"? "filterActive" : ""

        return (
            <div className="todoList-footer">
                {!this.state.isHidden&&<div>
                <button onClick={()=> {this.onFilterChange("All")}} className={classForAll}>All</button>
                <button onClick={()=> {this.onFilterChange("Completed")}} className={classForCompleted}>Completed</button>
                <button onClick={()=> {this.onFilterChange("Active")}} className={classForActive}>Active</button>
                </div>}
                {!this.state.isHidden?<span onClick={this.onHidden}>Hide</span>
                    :<span onClick={this.onShow}>Show</span>}
            </div>


        );
    }
}

export default TodoListFooter;