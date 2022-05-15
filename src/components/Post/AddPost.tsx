import React, { FormEventHandler } from 'react'
import TextInput from '../Forms/TextInput/TextInput'
import styles from './Post.module.scss'

const AddPost = () => {
    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        console.log(event)
    }

    return (
        <form className={styles.addTodo} onSubmit={submitHandler}>
            <TextInput
                labelText='Добавить задачу'
                // value={value}
                // onChange={changehandler}
                name={'newPost'}
                className={styles.addInput}
            />
            <button type='submit'>Добавить</button>
        </form>
    )
}

export default AddPost
