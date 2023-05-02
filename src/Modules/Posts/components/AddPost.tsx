import React, { FormEventHandler, useState } from 'react'
import styles from './Post.module.scss'
import TextInput from 'Common/components/Forms/TextInput/TextInput'
import { observer } from 'mobx-react'
import { useStores } from 'Store'

const AddPost = observer(() => {
    const { postsStore, userStore } = useStores()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        postsStore.add({ title, body, userId: userStore.id })
    }

    return (
        <form className={styles.addTodo} onSubmit={submitHandler}>
            <TextInput
                labelText='Заголовок'
                value={title}
                onChange={(e) => setTitle(e.target.value.trim())}
                name={'title'}
                className={styles.addInput}
            />
            <TextInput
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
