import React, { FC, HTMLAttributes } from 'react'
import { observer } from 'mobx-react'
import styles from './Post.module.scss'
import $posts, { IPost } from '../../store/Posts'
import ButtonX from '../../UI/ButtonX/ButtonX'

interface IPostProps extends HTMLAttributes<HTMLDivElement> {
    post: IPost
}

const Post: FC<IPostProps> = observer(({ post, className = '', ...props }) => {
    console.log('render post', post.id)

    return (
        <div className={`${styles.post} ${className ?? ''}`} {...props}>
            <div className={styles.header}>
                <h3>
                    {post.id}. {post.title}
                </h3>
                <ButtonX className={styles.remove} onClick={() => $posts.remove(post.id)} />
            </div>
            <p>{post.body}</p>
        </div>
    )
})

export default Post
