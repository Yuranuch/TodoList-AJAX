import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {


    tasksElement=this.props.tasks.map(t =><TodoListTask title={t.title} isDone={t.isDone} priority={t.priority} /> )

    render = () => {
        return (

            <div className="todoList-tasks">
                {this.tasksElement}

            </div>

        );
    }
}

export default TodoListTasks;