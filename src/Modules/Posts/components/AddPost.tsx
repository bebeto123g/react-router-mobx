import React, { FormEventHandler, useState } from 'react'
import { observer } from 'mobx-react'
import { useStores } from 'Store'
import { TextInputLazy } from 'Common'
import styles from './Post.module.scss'

const AddPost = observer(() => {
    const { PostStore, UserStore } = useStores()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        PostStore.add({ title, body, userId: UserStore.state.id })
    }

    return (
        <form className={styles.addTodo} onSubmit={submitHandler}>
            <TextInputLazy
                labelText='Заголовок'
                value={title}
                onChange={(e) => setTitle(e.target.value.trim())}
                name={'title'}
                className={styles.addInput}
            />
            <TextInputLazy
                labelText='Описание'
                value={body}
                onChange={(e) => setBody(e.target.value.trim())}
                name={'body'}
                className={styles.addInput}
            />
            <button type='submit' disabled={Boolean(!title || !body)}>Добавить</button>
        </form>
    )
})

export default AddPost
