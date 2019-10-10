import * as axios from "axios";

export const api = {
    createTask(todolistId, newText) {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/todo-lists/${todolistId}/tasks`, {title: newText},
            {withCredentials: true, headers: {"API-KEY": "2712bbc4-99c4-4494-954c-6bd0564807d4"}})
    },
    getTasks(todolistId) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/todo-lists/${todolistId}/tasks`,
            {withCredentials: true, headers: {"API-KEY": "2712bbc4-99c4-4494-954c-6bd0564807d4"}})
    },
    updateTask(task) {
        return axios.put(`https://social-network.samuraijs.com/api/1.0/todo-lists/tasks`, task,
            {withCredentials: true, headers: {"API-KEY": "2712bbc4-99c4-4494-954c-6bd0564807d4"}})
    },
    deleteTodoList(todolistId) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/todo-lists/${todolistId}`,
            {withCredentials: true, headers: {"API-KEY": "2712bbc4-99c4-4494-954c-6bd0564807d4"}})
    },
    deleteTask(taskId) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/todo-lists/tasks/${taskId}`,
            {withCredentials: true, headers: {"API-KEY": "2712bbc4-99c4-4494-954c-6bd0564807d4"}})
    },
    createTodoList(title) {
        return axios.post("https://social-network.samuraijs.com/api/1.0/todo-lists", {title: title},
            {withCredentials: true, headers: {"API-KEY": "2712bbc4-99c4-4494-954c-6bd0564807d4"}})
    },
    getTodoLists() {
        return axios.get("https://social-network.samuraijs.com/api/1.0/todo-lists",
            {withCredentials: true, headers: {"API-KEY": "2712bbc4-99c4-4494-954c-6bd0564807d4"}})
    }
}
