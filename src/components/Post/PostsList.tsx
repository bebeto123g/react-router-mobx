import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import styles from './Post.module.scss'
import $posts from '../../store/Posts'
import Post from './Post'
import Loader from '../../UI/Loader/Loader'
import AddPost from './AddPost'

const PostsList = observer(() => {
    useEffect(() => {
        if (!$posts.posts) {
            $posts.get()
        }
    }, [])

    if (!$posts.posts) return <Loader color='black' size='sm' />

    return (
        <>
            <AddPost />
            <div className={styles.list}>
                {$posts.posts.map((post) => {
                    return <Post post={post} key={post.id} />
                })}
            </div>
        </>
    )
})

export default PostsList
