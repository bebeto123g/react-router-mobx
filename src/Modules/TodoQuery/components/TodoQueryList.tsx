import React, { useCallback, useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ActionBar, PageLoader } from 'Common'
import { APIServiceJsonServer, JSON_SERVER_TODO_QUERY_KEY } from 'Core/API/JsonServer'
import { ETodoQueryFilterAction } from 'Modules/TodoQuery/enums'
import { TODO_QUERY_ACTIONS_MODEL } from 'Modules/TodoQuery/constants'
import TodoQueryItem from 'Modules/TodoQuery/components/TodoQueryItem'
import { ITodoQuery } from 'Modules/TodoQuery/interfaces'
import styles from './TodoQuery.module.scss'

const TodoQueryList = () => {
    const [filterTodo, setFilterTodo] = useState(ETodoQueryFilterAction.ALL)

    const { data, isLoading, isSuccess } = useQuery({
        queryFn: () => APIServiceJsonServer.getTodos(filterTodo),
        queryKey: [JSON_SERVER_TODO_QUERY_KEY, filterTodo],
        staleTime: 5000,
        onError: (e) => {
            console.error(e)
        },
    })

    const changeActionTodoHandler = useCallback((value: ETodoQueryFilterAction) => {
        setFilterTodo(value)
    }, [])

    const todos: ITodoQuery[] = useMemo(() => {
        if (!data) {
            return []
        }

        if (filterTodo === ETodoQueryFilterAction.COMPLETED) {
            return data.filter((todo) => todo.completed)
        }

        if (filterTodo === ETodoQueryFilterAction.NOT_COMPLETED) {
            return data.filter((todo) => !todo.completed)
        }

        return [...data]
    }, [data, filterTodo])

    return (
        <>
            <ActionBar<ETodoQueryFilterAction>
                actions={TODO_QUERY_ACTIONS_MODEL}
                onChange={changeActionTodoHandler}
                defaultAction={ETodoQueryFilterAction.ALL}
            />

            {isLoading ? (
                <PageLoader />
            ) : (
                <ul className={styles.list}>
                    {isSuccess && todos.map((todo) => <TodoQueryItem key={todo.id} todo={todo} />)}
                </ul>
            )}
        </>
    )
}

export default TodoQueryList
