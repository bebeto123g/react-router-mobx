import React, { FC, HTMLAttributes } from 'react'
import { observer } from 'mobx-react'
import styles from './Post.module.scss'
import { IPost } from 'Store/Posts'
import ButtonX from 'Common/components/ButtonX/ButtonX'
import { useStores } from 'Store'

interface IPostProps extends HTMLAttributes<HTMLDivElement> {
    post: IPost
}

const Post: FC<IPostProps> = observer(({ post, className = '', ...props }) => {
    const { postsStore } = useStores()

    return (
        <div className={`${styles.post} ${className ?? ''}`} {...props}>
            <div className={styles.header}>
                <h3>
                    {post.id}. {post.title}
                </h3>
                <ButtonX className={styles.remove} onClick={() => postsStore.remove(post.id)} />
            </div>
            <p>{post.body}</p>
        </div>
    )
})

export default Post
