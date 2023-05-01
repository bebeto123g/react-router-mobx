import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import styles from './Post.module.scss'
import Post from './Post'
import Loader from 'Common/components/Loader/Loader'
import AddPost from './AddPost'
import { useStores } from 'Store'

const PostsList = observer(() => {
    const { postsStore } = useStores()

    useEffect(() => {
        if (!postsStore.posts) {
            postsStore.get()
        }
    }, [])

    if (!postsStore.posts) return <Loader color='black' size='sm' />

    return (
        <>
            <AddPost />
            <div className={styles.list}>
                {postsStore.posts.map((post) => {
                    return <Post post={post} key={post.id} />
                })}
            </div>
        </>
    )
})

export default PostsList
