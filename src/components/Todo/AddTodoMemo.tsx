import React, { FC, FormEventHandler } from 'react'
import styles from './Todo.module.scss'

interface IAddTodoMemo {
    addTodo: (title: string) => void
}

const AddTodoMemo: FC<IAddTodoMemo> = ({ addTodo }) => {
    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        {/* @ts-ignore */}
        const value = event.target.newTodo.value.trim()
        {/* @ts-ignore */}
        event.target.newTodo.value = ''
        if (value) {
            addTodo(value)
        }
    }

    return (
        <form className={styles.addTodo} onSubmit={submitHandler}>
            <div className={styles.addInput}>
                <label htmlFor={'newTodo'}>Добавить задачу</label>
                <input
                    name={'newTodo'}
                    type='text'
                    className={`${styles.input}`}
                />
            </div>
            <button type='submit'>Добавить</button>
        </form>
    )
}

export default React.memo(AddTodoMemo)
