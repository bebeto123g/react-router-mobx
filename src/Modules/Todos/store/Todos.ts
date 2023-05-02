import { makeAutoObservable } from 'mobx'
import { APIServiceJson } from 'Core/API/JsonPlaceholder/service'

export interface ITodo {
    userId: number
    id: number
    title: string
    completed: boolean
}

class Todos {
    todos: ITodo[] | null = null

    constructor() {
        makeAutoObservable(this)
    }

    async get(page = 1) {
        const todos = await APIServiceJson.getTodosPage({ page })
        this.setTodos(todos)
    }

    setTodos(todos: ITodo[]) {
        this.todos = todos
    }

    add(title: string, userId: number) {
        this.todos?.push({
            id: Math.max(0, Math.max(...this.todos.map(({ id }) => id))) + 1,
            userId,
            title,
            completed: false,
        })
    }

    update(id: number, title: string) {
        const index = this.findTodoIndex(id)
        if (!this.todos || !index) return
        this.todos[index].title = title
    }

    remove(id: number) {
        const index = this.findTodoIndex(id)
        if (!this.todos || index === undefined || index < 0) return
        this.todos.splice(index, 1)
    }

    toggleCompleted(id: number) {
        const index = this.findTodoIndex(id)
        if (!this.todos || !index) return
        this.todos[index].completed = !this.todos[index].completed
    }

    findTodoIndex(id: number) {
        return this.todos?.findIndex((todo) => todo.id === id)
    }
}

export default new Todos()
