import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import styles from './Todo.module.scss'

import TextInput from '../Forms/TextInput/TextInput'
import { observer } from 'mobx-react'
import { useStores } from 'Store'

const AddTodo = observer(() => {
    const { todosStore } = useStores()
    const [value, setValue] = useState('')

    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        setValue((prev) => prev.trim())
        if (value) {
            todosStore.add(value)
        }
    }

    const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value)
    }

    return (
        <form className={styles.addTodo} onSubmit={submitHandler}>
            <TextInput
                labelText='Добавить задачу'
                value={value}
                onChange={changeHandler}
                name={'newTodo'}
                className={styles.addInput}
            />
            <button type='submit' disabled={Boolean(!value)}>
                Добавить
            </button>
        </form>
    )
})

export default AddTodo