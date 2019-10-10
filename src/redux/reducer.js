export const ADD_TODOLIST = "ADD_TODOLIST"
export const ADD_TASK = "ADD_TASK"
export const UPDATE_TASK = "UPDATE_TASK"
export const DELETE_TODOLIST = "DELETE_TODOLIST"
export const DELETE_TASK = "DELETE_TASK"
export const SET_TODOLISTS= "SET_TODOLISTS"
export const SET_TASKS = "SET_TASKS"

const initialState = {
    todolists: [
        // {id: 0, title: "React", tasks:[]},
        // {id: 1, title: "HTML", tasks:[]},

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
                todolists: state.todolists.map( tl => {
                    if (tl.id === action.todolistId) {
                        return {...tl, tasks: tl.tasks.map(t => {
                                if (t.id === action.taskId) {
                                    return {...t, ...action.obj}
                                }else {return t}
                            })}
                    } else {return tl}
                })
            }
        case DELETE_TODOLIST:
            return {
                ...state,
                todolists: state.todolists.filter(tl => {
                    if(tl.id != action.todolistId){
                        return {tl}
                    }
                })
            }
        case DELETE_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {...tl, tasks: tl.tasks.filter(t => {
                            if (t.id != action.taskId) {
                                return {t}
                            }
                            })}
                    }else { return tl}
                })
            }
        case SET_TODOLISTS:
            return {
                ...state,
                todolists: action.newTodolists.map(tl => ({...tl, tasks:[]}))
            }
        case SET_TASKS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id !== action.todolistId) {
                        return tl;
                    } else {
                        return {...tl, tasks: action.tasks}
                    }
                })
            }


    }
    return state
}


export const addTodoList = (newTodoList) => ({type: ADD_TODOLIST, newTodoList})
export const addTask = (todoListId, newTask) => ({type: ADD_TASK, todoListId, newTask})
export const updateTask = (taskId, obj, todolistId) => ({type: UPDATE_TASK, taskId, obj, todolistId})
export const deleteTodoList = (todolistId) => ({type:DELETE_TODOLIST,todolistId})
export const deleteTask = (taskId, todolistId) => ({type: DELETE_TASK,taskId, todolistId})
export const setTodolists= (newTodolists) => ({type:SET_TODOLISTS, newTodolists})
export const setTasks = (tasks, todolistId) => ({type:SET_TASKS, tasks, todolistId})