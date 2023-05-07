import React, { ChangeEventHandler, MouseEventHandler, useCallback, useState } from 'react'
import { TextInput } from 'Common'
import { useQueryTodo } from 'Modules/TodoQuery/service/useQueryTodo'

const TodoQueryAdd = () => {
    const [todoText, setTodoText] = useState('')

    const {
        createTodo: { mutate },
    } = useQueryTodo()

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
                Создать
            </button>
        </>
    )
}

export default TodoQueryAdd
