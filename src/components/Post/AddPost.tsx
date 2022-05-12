import React from 'react'
import TextInput from '../Forms/TextInput/TextInput'
import styles from './Post.module.scss'

interface Props {}

const AddPost = (props: Props) => {
    const submitHandler = () =>  {}

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