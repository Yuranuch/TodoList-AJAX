import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {




    render = () => {
        let tasksElement=this.props.tasks.map(task =><TodoListTask
            changeStatus={this.props.changeStatus}
            task={task}
           /> )
        return (
            <div className="todoList-tasks">
                {tasksElement}

            </div>

        );
    }
}

export default TodoListTasks;