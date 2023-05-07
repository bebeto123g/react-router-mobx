import React, { useCallback, useState } from 'react'
import { ActionBar, PageLoader } from 'Common'
import { ETodoQueryFilterAction } from 'Modules/TodoQuery/enums'
import { TODO_QUERY_ACTIONS_MODEL } from 'Modules/TodoQuery/constants'
import TodoQueryItem from 'Modules/TodoQuery/components/TodoQueryItem'
import { useQueryTodo } from 'Modules/TodoQuery/service/useQueryTodo'
import styles from './TodoQuery.module.scss'

const TodoQueryList = () => {
    const [filterTodo, setFilterTodo] = useState(ETodoQueryFilterAction.ALL)

    const {
        getTodos: { data, isLoading, isSuccess },
    } = useQueryTodo(filterTodo)

    const changeActionTodoHandler = useCallback((value: ETodoQueryFilterAction) => {
        setFilterTodo(value)
    }, [])

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
                    {isSuccess && data?.map((todo) => <TodoQueryItem key={todo.id} todo={todo} />)}
                </ul>
            )}
        </>
    )
}

export default TodoQueryList
