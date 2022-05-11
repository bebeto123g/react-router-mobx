import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import styles from './Todo.module.scss'

import $todos from '../../store/Todos'
import Loader from '../../UI/Loader/Loader'
import AddTodo from './AddTodo'
import Todo from './Todo'

const TodoList = observer(() => {
    useEffect(() => {
        if (!$todos.todos) {
            $todos.get()
        }
    }, [])

    if (!$todos.todos) return <Loader color='black' size='sm' />

    return (
        <>
            <AddTodo />
            <ul className={styles.list}>
                {$todos.todos.map((todo) => (
                    <Todo todo={todo} key={todo.title} />
                ))}
            </ul>
        </>
    )
})

export default TodoList
