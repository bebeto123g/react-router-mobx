import React, { FC, useEffect, useState, useTransition } from 'react'
import { observer } from 'mobx-react'
import { useNavigate } from 'react-router-dom'
import styles from './Todo.module.scss'
import $todos, { ITodo } from '../../store/Todos'
import Todo from './Todo'
import Loader from '../../UI/Loader/Loader'

const TodoSearchList: FC<{ search: string }> = observer(({ search }) => {
    const [filterTodo, setFilterTodo] = useState<ITodo[]>([])
    const navigate = useNavigate()
    const [isPendingTransitin, startTransition] = useTransition()

    useEffect(() => {
        if (!$todos.todos) {
            navigate('/list')
        }
    }, [navigate])

    useEffect(() => {
        startTransition(() => {
            if (!$todos.todos) return
            const searchArray = [...$todos.todos].filter(
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
