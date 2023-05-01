import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import styles from './Todo.module.scss'

import Loader from 'Common/components/Loader/Loader'
import AddTodo from './AddTodo'
import Todo from './Todo'
import { useStores } from 'Store'

const TodoList = observer(() => {
    const { todosStore } = useStores()

    useEffect(() => {
        if (!todosStore.todos) {
            todosStore.get()
        }
    }, [])

    if (!todosStore.todos) return <Loader color='black' size='sm' />

    return (
        <>
            <AddTodo />
            <ul className={styles.list}>
                {todosStore.todos.map((todo) => (
                    <Todo todo={todo} key={todo.title} />
                ))}
            </ul>
        </>
    )
})

export default TodoList
