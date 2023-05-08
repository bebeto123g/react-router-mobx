import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import styles from './Post.module.scss'
import { IPostQuery } from 'Modules/PostsQuery/interfaces'
import { TextInput } from 'Common'
import { APIServiceJsonServer } from 'Core/API/JsonServer'
import { Utils } from 'Core/Utils'

interface IPostsQueryAddProps {
    createNewPost: (post: IPostQuery) => void
}

const PostsQueryAdd = ({ createNewPost }: IPostsQueryAddProps) => {
    const [isLoading, setIsLoading] = useState(false)
    const [post, setPost] = useState<Omit<IPostQuery, 'id' | 'createDate'>>({
        title: '',
        text: '',
    })

    const submitHandler: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        await Utils.delay(1000)
        const newPost = await APIServiceJsonServer.createPost({
            ...post,
            createDate: new Date().toISOString(),
        })
        createNewPost(newPost)
        setPost({ title: '', text: '' })
        setIsLoading(false)
    }

    const changeNewPost: ChangeEventHandler<HTMLInputElement> = (event) => {
        setPost((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }

    return (
        <>
            <h3>Добавить пост</h3>
            <form className={styles.addTodo} onSubmit={submitHandler}>
                <TextInput
                    labelText='Заголовок'
                    value={post.title}
                    onChange={changeNewPost}
                    name={'title'}
                    className={styles.addInput}
                    disabled={isLoading}
                />
                <TextInput
                    labelText='Описание'
                    value={post.text}
                    onChange={changeNewPost}
                    name={'text'}
                    className={styles.addInput}
                    disabled={isLoading}
                />
                <button type='submit' disabled={Boolean(!post.title || !post.text) || isLoading}>
                    {isLoading ? 'Обработка...' : 'Добавить'}
                </button>
            </form>
        </>
    )
}

export default PostsQueryAdd
