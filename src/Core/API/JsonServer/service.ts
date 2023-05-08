import { APIProvider } from 'Core/API/provider'
import { ETodoQueryFilterAction, ITodoQuery } from 'Modules/TodoQuery'
import { JSON_SERVER_BASE_URL_POSTS, JSON_SERVER_BASE_URL_TODOS } from './constants'
import { IPostQuery } from 'Modules/PostsQuery'

/* TODO это все нужно в модуль вынести, но мне лень */
export class APIServiceJsonServer {
    static getTodos(filter: ETodoQueryFilterAction): Promise<ITodoQuery[]> {
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

    static getPosts(): Promise<IPostQuery[]> {
        return APIProvider.get<IPostQuery[]>(JSON_SERVER_BASE_URL_POSTS)
    }

    static createPost(post: Omit<IPostQuery, 'id'>) {
        return APIProvider.post<IPostQuery, Omit<IPostQuery, 'id'>>(
            JSON_SERVER_BASE_URL_POSTS,
            post,
        )
    }

    static createGetTodosQueryFilter(filter: ETodoQueryFilterAction) {
        return filter === ETodoQueryFilterAction.ALL
            ? ''
            : `/?completed=${filter === ETodoQueryFilterAction.COMPLETED}`
    }
}
