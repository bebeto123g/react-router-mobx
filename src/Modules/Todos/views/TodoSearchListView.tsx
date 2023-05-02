import React, { FC, useEffect, useState, useTransition } from 'react'
import { observer } from 'mobx-react'
import { useNavigate } from 'react-router-dom'
import { useStores } from 'Store'
import Todo from '../components/Todo'
import { Loader } from 'Common'
import { ITodo } from '../interfaces'
import styles from '../components/Todo.module.scss'

const TodoSearchListView: FC<{ search: string }> = observer(({ search }) => {
    const navigate = useNavigate()
    const [filterTodo, setFilterTodo] = useState<ITodo[]>([])
    const [isPendingTransitin, startTransition] = useTransition()
    const { TodoStore } = useStores()

    useEffect(() => {
        if (!TodoStore.todos) {
            navigate('/list')
        }
    }, [navigate])

    useEffect(() => {
        startTransition(() => {
            if (!TodoStore.todos) return
            const searchArray = [...TodoStore.todos].filter(
                (todo) => todo.title.toLowerCase().indexOf(search) !== -1,
            )
            setFilterTodo(searchArray)
        })
    }, [search])

    if (isPendingTransitin) return <Loader color='orange' />

    if (!filterTodo.length) {
        return (
            <p>
                Ничего не найдено по запросу <q>{search}</q>
            </p>
        )
    }

    return (
        <ul className={styles.list}>
            {filterTodo.map((todo) => {
                return <Todo todo={todo} key={todo.id} />
            })}
        </ul>
    )
})

export default TodoSearchListView
