import { makeAutoObservable } from 'mobx'
import { getTodosPage } from './../API/getTodo'

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

    async get(page: number = 0) {
        this.todos = await getTodosPage(page)
    }

    add(title: string) {
        this.todos?.push({
            id: Math.max(0, Math.max(...this.todos.map(({ id }) => id))) + 1,
            userId: 123,
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
        if (!this.todos || !index) return
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
