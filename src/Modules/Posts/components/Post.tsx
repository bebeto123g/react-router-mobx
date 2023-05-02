import React, { FC, HTMLAttributes } from 'react'
import { observer } from 'mobx-react'
import { useStores } from 'Store'
import { IPost } from '../interfaces'
import { ButtonX } from 'Common'
import styles from './Post.module.scss'

interface IPostProps extends HTMLAttributes<HTMLDivElement> {
    post: IPost
}

const Post: FC<IPostProps> = observer(({ post, className = '', ...props }) => {
    const { PostStore } = useStores()

    return (
        <div className={`${styles.post} ${className ?? ''}`} {...props}>
            <div className={styles.header}>
                <h3>
                    {post.id}. {post.title}
                </h3>
                <ButtonX className={styles.remove} onClick={() => PostStore.remove(post.id)} />
            </div>
            <p>{post.body}</p>
        </div>
    )
})

export default Post
