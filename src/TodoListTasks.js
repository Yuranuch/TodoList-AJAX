import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {

    render = () => {
        let tasksElement = this.props.tasks.map(task => <TodoListTask
            onDeleteTask={this.props.onDeleteTask}
            changeStatus={this.props.changeStatus}
            changeTitle={this.props.changeTitle}
            task={task}
        />)
        return (
            <div className="todoList-tasks">
                {tasksElement}

            </div>
        );
    }
}

export default TodoListTasks;