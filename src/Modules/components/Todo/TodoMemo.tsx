import React, { AllHTMLAttributes, FC } from 'react'
import { Link } from 'react-router-dom'
import { ITodo } from 'Store/Todos'
import ButtonX from 'Common/components/ButtonX/ButtonX'
import styles from './Todo.module.scss'

interface ITodoProps extends AllHTMLAttributes<HTMLDivElement> {
    todo: ITodo
    toggleCompleted: (id: number) => void
    removeTodo: (id: number) => void
}

const TodoMemo: FC<ITodoProps> = ({
    todo,
    className = '',
    toggleCompleted,
    removeTodo,
    ...props
}) => {
    const wrapperStyles = `${styles.todoWrapper} ${className ?? ''} ${
        todo.completed ? styles.todoCompleted : ''
    }`

    return (
        <div className={wrapperStyles} {...props}>
            <input
                type='checkbox'
                name={`input-todo-${todo.id}`}
                id={`${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleCompleted(todo.id)}
            />
            <span className={styles.todoId}>{todo.id}.</span>
            <span className={styles.todoTitle}>{todo.title}</span>
            <Link to={String(todo.id)} className={`${styles.more}`}>
                Подробнее
            </Link>
            <ButtonX className={styles.todoRemove} onClick={() => removeTodo(todo.id)} />
        </div>
    )
}

export default React.memo(TodoMemo)
