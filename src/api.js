import * as axios from "axios"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/todo-lists",
    withCredentials: true,
    headers: {"API-KEY": "2712bbc4-99c4-4494-954c-6bd0564807d4"}
})

export const api = {
    createTask(todolistId, newText) {
        return instance.post(`/${todolistId}/tasks`, {title: newText})
    },
    getTasks(todolistId) {
        return instance.get(`/${todolistId}/tasks`)
    },
    updateTask(task) {
        return instance.put(`/tasks`, task)
    },
    deleteTodoList(todolistId) {
        return instance.delete(`/${todolistId}`)
    },
    deleteTask(taskId) {
        return instance.delete(`/tasks/${taskId}`)
    },
    createTodoList(title) {
        return instance.post("", {title: title})
    },
    getTodoLists() {
        return instance.get("")
    },
}
