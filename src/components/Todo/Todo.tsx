import React, { AllHTMLAttributes, FC } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import styles from './Todo.module.scss'
import $todos, { ITodo } from '../../store/Todos'
import ButtonX from '../../UI/ButtonX/ButtonX'

interface ITodoProps extends AllHTMLAttributes<HTMLDivElement> {
    todo: ITodo
}

const Todo: FC<ITodoProps> = observer(({ todo, className = '', ...props }) => {
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
                onChange={() => $todos.toggleCompleted(todo.id)}
            />
            <span className={styles.todoId}>{todo.id}.</span>
            <span className={styles.todoTitle}>{todo.title}</span>
            <Link to={String(todo.id)} className={`${styles.more}`}>
                Подробнее
            </Link>
            <ButtonX className={styles.todoRemove} onClick={() => $todos.remove(todo.id)} />
        </div>
    )
})

export default Todo
