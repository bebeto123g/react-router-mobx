import React, { useCallback, useEffect, useState } from 'react'
import { getTodosPage } from '../API/getTodo'
import { ITodo } from '../store/Todos'
import styles from '../components/Todo/Todo.module.scss'
import Loader from '../UI/Loader/Loader'
import Container from '../UI/Container/Container'
import TodoMemo from '../components/Todo/TodoMemo'
import AddTodoMemo from '../components/Todo/AddTodoMemo'

const TestMemoView = () => {
    const [todos, setTodos] = useState<ITodo[] | null>(null)

    const toggleCompleted = useCallback((id: number) => {
        setTodos((todos) => {
            if (!todos) return null
            const newTodos = todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return newTodos
        })
    }, [])

    const removeTodo = useCallback((id: number) => {
        setTodos((todos) => {
            if (!todos) return null
            return todos.filter((todo) => todo.id !== id)
        })
    }, [])

    const addTodo = useCallback((title: string) => {
        setTodos((todos) => {
            if (!todos) return null
            return [
                ...todos,
                {
                    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
                    userId: 123,
                    title,
                    completed: false,
                },
            ]
        })
    }, [])

    useEffect(() => {
        if (!todos) {
            getTodosPage().then((todos) => {
                setTodos(todos)
            })
        }
    }, [todos])

    if (!todos) return <Loader />

    return (
        <Container>
            <h1>Memo Page</h1>
            <AddTodoMemo addTodo={addTodo} />
            <ul className={styles.list}>
                {todos.map((todo) => (
                    <TodoMemo
                        todo={todo}
                        key={todo.id + String(+todo.completed)}
                        removeTodo={removeTodo}
                        toggleCompleted={toggleCompleted}
                    />
                ))}
            </ul>
        </Container>
    )
}

export default TestMemoView
