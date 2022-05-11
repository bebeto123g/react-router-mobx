import { makeAutoObservable } from 'mobx'
import { ITimeoutId } from '../global'

export interface ITodo {
    userId: number
    id: number
    title: string
    completed: boolean
}

class Todos {
    isPending: boolean = false
    todos: ITodo[] = []
    newTodo: string = ''

    constructor() {
        makeAutoObservable(this)
    }

    get() {

    }

    add() {

    }

    update() {

    }
    remove() {

    }

    toggleCompleted(id: number | string) {

    }
}

export default new Todos()
