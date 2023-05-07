import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { APIServiceJsonServer, JSON_SERVER_TODO_QUERY_KEY } from 'Core/API/JsonServer'
import { ITodoQuery } from 'Modules/TodoQuery/interfaces'
import { ETodoQueryFilterAction } from 'Modules/TodoQuery/enums'

export const useQueryTodo = (filter?: ETodoQueryFilterAction) => {
    const client = useQueryClient()
    const filterTodo = filter || ETodoQueryFilterAction.ALL

    const createTodo = useMutation({
        mutationFn: (title: string) => APIServiceJsonServer.createTodo(title),
        onSuccess: async (newTodo) => {
            client.setQueriesData<ITodoQuery[]>(
                [JSON_SERVER_TODO_QUERY_KEY, ETodoQueryFilterAction.ALL],
                (oldTodos) => {
                    return [...(oldTodos || []), newTodo]
                },
            )

            await client.invalidateQueries({
                queryKey: [JSON_SERVER_TODO_QUERY_KEY, ETodoQueryFilterAction.ALL],
                refetchType: 'none',
            })
        },
        onError: (e) => {
            console.error(e)
        },
    })

    const toggleTodoStatus = useMutation({
        mutationFn: (todo: ITodoQuery) =>
            APIServiceJsonServer.toggleTodoStatus(todo.id, !todo.completed),
        onSuccess: async (newTodo) => {
            client.setQueriesData<ITodoQuery[]>([JSON_SERVER_TODO_QUERY_KEY], (oldTodos) => {
                const todos = [...(oldTodos || [])]
                const index = todos.findIndex((todo) => todo.id === newTodo.id)

                if (todos[index]) {
                    todos[index].completed = newTodo.completed
                }

                return todos
            })

            await client.invalidateQueries({
                queryKey: [JSON_SERVER_TODO_QUERY_KEY],
            })
        },
        onError: (e) => {
            console.error(e)
        },
    })

    const getTodos = useQuery({
        queryFn: () => APIServiceJsonServer.getTodos(filterTodo),
        queryKey: [JSON_SERVER_TODO_QUERY_KEY, filterTodo],
        staleTime: 5000,
        onError: (e) => {
            console.error(e)
        },
    })

    return { createTodo, toggleTodoStatus, getTodos }
}
