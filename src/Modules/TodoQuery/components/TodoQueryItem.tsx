import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIServiceJsonServer, JSON_SERVER_TODO_QUERY_KEY } from 'Core/API/JsonServer'
import { ITodoQuery } from '../interfaces'
import styles from './TodoQuery.module.scss'

interface ITodoQueryItemProps {
    todo: ITodoQuery
}

const TodoQueryItem = ({ todo }: ITodoQueryItemProps) => {
    const client = useQueryClient()

    const { mutate, isLoading } = useMutation({
        mutationFn: () => APIServiceJsonServer.toggleTodoStatus(todo.id, !todo.completed),
        onSuccess: async (newTodo) => {
            client.setQueriesData<ITodoQuery[]>([JSON_SERVER_TODO_QUERY_KEY], (oldTodos) => {
                const todos = [...oldTodos || []]
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

    return (
        <li className={styles.listItem}>
            <input
                type='checkbox'
                name={`check-${todo.id}`}
                id={`check-${todo.id}`}
                onChange={() => mutate()}
                defaultChecked={todo.completed}
                disabled={isLoading}
            />
            <span>{isLoading ? 'refresh' : todo.title}</span>
        </li>
    )
}

export default TodoQueryItem
