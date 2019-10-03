export const ADD_ITEM = "ADD_ITEM"


const initialState = {
    todolists: [
        {id: 0, title: "React"},
        {id: 1, title: "HTML"},

    ],
    nextTodoListId: 3,
    taskValue: "",
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            return {...state,
                todolists: [...state.todolists, action.newTodoList ]
            }
        }
    }
    return state
}


export const addItem = (newTodoList) => ({type: ADD_ITEM, newTodoList})