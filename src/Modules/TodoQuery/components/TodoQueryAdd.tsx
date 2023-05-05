import React, { ChangeEventHandler, MouseEventHandler, useCallback, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TextInput } from 'Common'
import { APIServiceJsonServer, JSON_SERVER_TODO_QUERY_KEY } from 'Core/API/JsonServer'
import { ETodoQueryFilterAction } from 'Modules/TodoQuery/enums'
import { ITodoQuery } from 'Modules/TodoQuery/interfaces'

const TodoQueryAdd = () => {
    const [todoText, setTodoText] = useState('')

    const client = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: APIServiceJsonServer.createTodo,
        onSuccess: async (newTodo) => {
            // client.getQueryData([JSON_SERVER_TODO_QUERY_KEY, ETodoQueryFilterAction.ALL])
            client.setQueriesData<ITodoQuery[]>(
                [JSON_SERVER_TODO_QUERY_KEY, ETodoQueryFilterAction.ALL],
                (oldTodos) => {
                    return [...(oldTodos || []), newTodo]
                },
            )

            await client.invalidateQueries({
                queryKey: [JSON_SERVER_TODO_QUERY_KEY, ETodoQueryFilterAction.ALL],
                refetchType: 'none',
            })
        },
        onError: (e) => {
            console.error(e)
        },
    })

    const changeHandler: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        setTodoText(event.target.value)
    }, [])

    const submitHandler: MouseEventHandler<HTMLButtonElement> = () => {
        const text = todoText.trim()
        if (text) {
            mutate(text)
            setTodoText('')
        }
    }

    return (
        <>
            <TextInput value={todoText} onChange={changeHandler} name={'todo'} labelText='TODO' />
            <button type='button' onClick={submitHandler}>
                Редактировать
            </button>
        </>
    )
}

export default TodoQueryAdd
