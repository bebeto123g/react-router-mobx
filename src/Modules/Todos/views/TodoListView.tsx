import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { useStores } from 'Store'
import AddTodo from '../components/AddTodo'
import Todo from '../components/Todo'
import styles from '../components/Todo.module.scss'
import { Loader } from 'Common'

const TodoList = observer(() => {
    const { TodoStore } = useStores()

    useEffect(() => {
        if (!TodoStore.todos) {
            TodoStore.get()
        }
    }, [])

    if (!TodoStore.todos) return <Loader color='black' size='sm' />

    return (
        <>
            <AddTodo />
            <ul className={styles.list}>
                {TodoStore.todos.map((todo) => (
                    <Todo todo={todo} key={todo.title} />
                ))}
            </ul>
        </>
    )
})

export default TodoList
