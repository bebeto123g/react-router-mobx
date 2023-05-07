import React from 'react'
import { ITodoQuery } from '../interfaces'
import { useQueryTodo } from 'Modules/TodoQuery/service/useQueryTodo'
import styles from './TodoQuery.module.scss'

interface ITodoQueryItemProps {
    todo: ITodoQuery
}

const TodoQueryItem = ({ todo }: ITodoQueryItemProps) => {
    const {
        toggleTodoStatus: { mutate, isLoading },
    } = useQueryTodo()

    return (
        <li className={styles.listItem}>
            <input
                type='checkbox'
                name={`check-${todo.id}`}
                id={`check-${todo.id}`}
                onChange={() => mutate(todo)}
                defaultChecked={todo.completed}
                disabled={isLoading}
            />
            <span>{isLoading ? 'refresh' : todo.title}</span>
        </li>
    )
}

export default TodoQueryItem
