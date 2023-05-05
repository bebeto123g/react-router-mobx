import React, { useCallback, useEffect, useState } from 'react'
import { APIServiceJsonPlaceholder } from 'Core/API/JsonPlaceholder/service'
import { AddTodoMemo, ITodo, TodoMemo, styles } from 'Modules/Todos'
import { Loader } from 'Common'

const TestMemoPage = () => {
    const [todos, setTodos] = useState<ITodo[] | null>(null)
    const [isReverse, setIsReverse] = useState<boolean>(false)

    const toggleCompleted = useCallback((id: number) => {
        setTodos((todos) => {
            if (!todos) return null
            return todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
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
            APIServiceJsonPlaceholder.getTodosPage().then((todos) => {
                setTodos(todos)
            })
        }
    }, [todos])

    if (!todos) return <Loader />

    const reverseTodos = todos?.reverse()

    return (
        <>
            <h1>Memo Page</h1>
            <div className=''>
                <input
                    type='checkbox'
                    name='reverse-list'
                    id='reverse-list'
                    checked={isReverse}
                    onChange={() => {
                        setIsReverse((prev) => !prev)
                    }}
                />
                <label htmlFor='reverse-list'>Реверс</label>
            </div>
            <AddTodoMemo addTodo={addTodo} />
            <ul className={styles.list}>
                {reverseTodos.map((todo) => (
                    <TodoMemo
                        todo={todo}
                        key={todo.id + String(+todo.completed)}
                        removeTodo={removeTodo}
                        toggleCompleted={toggleCompleted}
                    />
                ))}
            </ul>
        </>
    )
}

export default TestMemoPage
