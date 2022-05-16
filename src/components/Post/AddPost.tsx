import React, { FormEventHandler, useState } from 'react'
import styles from './Post.module.scss'
import TextInput from '../Forms/TextInput/TextInput'
import $posts from '../../store/Posts'

const AddPost = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        $posts.add({ title, body })
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
}

export default AddPost
