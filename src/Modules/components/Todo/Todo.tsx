import React, { AllHTMLAttributes, FC } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import styles from './Todo.module.scss'
import { ITodo } from 'Store/Todos'
import ButtonX from 'Common/UI/ButtonX/ButtonX'
import { useStores } from 'Store'

interface ITodoProps extends AllHTMLAttributes<HTMLDivElement> {
    todo: ITodo
}

const Todo: FC<ITodoProps> = observer(({ todo, className = '', ...props }) => {
    const { todosStore } = useStores()

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
                onChange={() => todosStore.toggleCompleted(todo.id)}
            />
            <span className={styles.todoId}>{todo.id}.</span>
            <span className={styles.todoTitle}>{todo.title}</span>
            <Link to={String(todo.id)} className={`${styles.more}`}>
                Подробнее
            </Link>
            <ButtonX className={styles.todoRemove} onClick={() => todosStore.remove(todo.id)} />
        </div>
    )
})

export default Todo
