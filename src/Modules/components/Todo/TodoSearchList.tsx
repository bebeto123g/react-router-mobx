import React, { FC, useEffect, useState, useTransition } from 'react'
import { observer } from 'mobx-react'
import { useNavigate } from 'react-router-dom'
import styles from './Todo.module.scss'
import { ITodo } from 'Store/Todos'
import Todo from './Todo'
import Loader from 'Common/components/Loader/Loader'
import { useStores } from 'Store'

const TodoSearchList: FC<{ search: string }> = observer(({ search }) => {
    const navigate = useNavigate()
    const [filterTodo, setFilterTodo] = useState<ITodo[]>([])
    const [isPendingTransitin, startTransition] = useTransition()
    const { todosStore } = useStores()

    useEffect(() => {
        if (!todosStore.todos) {
            navigate('/list')
        }
    }, [navigate])

    useEffect(() => {
        startTransition(() => {
            if (!todosStore.todos) return
            const searchArray = [...todosStore.todos].filter(
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

export default TodoSearchList
