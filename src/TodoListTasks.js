import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {




    render = () => {
        let tasksElement=this.props.tasks.map(t =><TodoListTask title={t.title} isDone={t.isDone} priority={t.priority} /> )
        return (
            <div className="todoList-tasks">
                {tasksElement}

            </div>

        );
    }
}

export default TodoListTasks;