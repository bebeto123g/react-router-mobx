import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { useStores } from 'Store'
import Post from './Post'
import AddPost from './AddPost'
import { Loader } from 'Common'
import styles from './Post.module.scss'

const PostsList = observer(() => {
    const { PostStore } = useStores()

    useEffect(() => {
        if (!PostStore.posts) {
            PostStore.get()
        }
    }, [])

    if (!PostStore.posts) return <Loader color='black' size='sm' />

    return (
        <>
            <AddPost />
            <div className={styles.list}>
                {PostStore.posts.map((post) => {
                    return <Post post={post} key={post.id} />
                })}
            </div>
        </>
    )
})

export default PostsList
