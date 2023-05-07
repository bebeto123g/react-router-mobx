import { APIProvider } from 'Core/API/provider'
import { ETodoQueryFilterAction, ITodoQuery } from 'Modules/TodoQuery'
import { JSON_SERVER_BASE_URL_POSTS, JSON_SERVER_BASE_URL_TODOS } from './constants'

/* TODO это все нужно в модуль вынести, но мне лень */
export class APIServiceJsonServer {
    static async getTodos(filter: ETodoQueryFilterAction): Promise<ITodoQuery[]> {
        const queries = APIServiceJsonServer.createGetTodosQueryFilter(filter)
        return APIProvider.get<ITodoQuery[]>(`${JSON_SERVER_BASE_URL_TODOS}${queries}`)
    }

    static createTodo(title: string) {
        return APIProvider.post<ITodoQuery, Omit<ITodoQuery, 'id'>>(JSON_SERVER_BASE_URL_TODOS, {
            title,
            completed: false,
        })
    }

    static toggleTodoStatus(todoId: number, completed: boolean) {
        return APIProvider.patch<ITodoQuery, Omit<ITodoQuery, 'id' | 'title'>>(
            `${JSON_SERVER_BASE_URL_TODOS}/${todoId}`,
            { completed },
        )
    }

    static async getPosts(filter: ETodoQueryFilterAction): Promise<ITodoQuery[]> {
        const queries = APIServiceJsonServer.createGetTodosQueryFilter(filter)
        return APIProvider.get<ITodoQuery[]>(`${JSON_SERVER_BASE_URL_POSTS}${queries}`)
    }

    static createPost(title: string) {
        return APIProvider.post<ITodoQuery, Omit<ITodoQuery, 'id'>>(JSON_SERVER_BASE_URL_POSTS, {
            title,
            completed: false,
        })
    }

    static createGetTodosQueryFilter(filter: ETodoQueryFilterAction) {
        return filter === ETodoQueryFilterAction.ALL
            ? ''
            : `/?completed=${filter === ETodoQueryFilterAction.COMPLETED}`
    }
}
