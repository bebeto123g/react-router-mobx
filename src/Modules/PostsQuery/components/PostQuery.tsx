import React, { FC, HTMLAttributes } from 'react'
import { IPostQuery } from 'Modules/PostsQuery/interfaces'
import styles from './Post.module.scss'

interface IPostQueryProps extends HTMLAttributes<HTMLDivElement> {
    post: IPostQuery
}

const PostQuery: FC<IPostQueryProps> = ({ post, className = '', ...props }) => {
    return (
        <div className={`${styles.post} ${className ?? ''}`} {...props}>
            <div className={styles.header}>
                <h3>
                    {post.id}. {post.title}
                </h3>
            </div>
            <p>{post.text}</p>
            <p>{new Date(post.createDate).toLocaleString()}</p>
        </div>
    )
}

export default PostQuery
