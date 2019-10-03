export const ADD_TODOLIST = "ADD_TODOLIST"
export const ADD_TASK = "ADD_TASK"
export const UPDATE_TASK = "UPDATE_TASK"


const initialState = {
    todolists: [
        {id: 0, title: "React", tasks:[]},
        {id: 1, title: "HTML", tasks:[]},

    ]
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOLIST: {
            return {...state,
                todolists: [...state.todolists, action.newTodoList ]
            }
        }
        case ADD_TASK: {
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todoListId) {
                        return {...tl, tasks: [...tl.tasks, action.newTask] }
                    } else {return tl}
                })
            }
        }
        case UPDATE_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.map(t => {
                                if (t.id != action.taskId) {
                                    return t;
                                } else {
                                    return {...t, ...action.obj};
                                }
                            })
                        }
                    } else {
                        return tl
                    }
                })
            }


    }
    return state
}


export const addTodoList = (newTodoList) => ({type: ADD_TODOLIST, newTodoList})
export const addTask = (todoListId, newTask) => ({type: ADD_TASK, todoListId, newTask})
export const updateTask = (taskId, obj, todolistId) => ({type: UPDATE_TASK, taskId, obj, todolistId})