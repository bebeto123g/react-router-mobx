import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useStores } from 'Store'

const TodoView: FC = observer(() => {
    const navigate = useNavigate()
    const { todoId } = useParams()
    const { TodoStore } = useStores()

    useEffect(() => {
        if (!TodoStore.todos) {
            navigate('/list')
        }
    }, [navigate])

    const todo = TodoStore.todos?.find((todo) => todo.id === Number(todoId))

    if (!todo) {
        return (
            <h3>
                Оказия! <Link to={'/list'}>Перейти к списку</Link>
            </h3>
        )
    }

    return (
        <div>
            <h3>ID:{todo.id}</h3>
            <p>Пользователь: {todo.userId}</p>
            <p>{todo.title}</p>
            <Link to={'/list'} className='btn'>
                Перейти к списку
            </Link>
        </div>
    )
})

export default TodoView
