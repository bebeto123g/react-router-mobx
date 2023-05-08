import React, { ChangeEventHandler, useEffect, useState, useTransition } from 'react'
import PostsQueryAdd from 'Modules/PostsQuery/components/PostsQueryAdd'
import { IPostQuery } from 'Modules/PostsQuery/interfaces'
import PostsQueryList from 'Modules/PostsQuery/components/PostsQueryList'
import { APIServiceJsonServer } from 'Core/API/JsonServer'
import { PageLoader, TextInput } from 'Common'
import { Utils } from 'Core/Utils'
import styles from 'Modules/PostsQuery/components/Post.module.scss'

const PostsQueryView = () => {
    const [posts, setPosts] = useState<IPostQuery[] | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [isPending, startTransition] = useTransition()

    const createNewPost = async (post: IPostQuery) => {
        setPosts((prev) => {
            const state = prev || []
            return [...state, post]
        })
    }

    const searchHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        startTransition(() => {
            setSearch(event.target.value)
        })
    }

    const searchPosts =
        posts?.filter(({ title, text }) => {
            let count = 0
            while (count < 1_000_000) {
                count++
            }
            return title.includes(search) || text.includes(search)
        }) || []

    useEffect(() => {
        const getPosts = async () => {
            setIsLoading(true)
            await Utils.delay(1000)
            const successPosts = await APIServiceJsonServer.getPosts()
            setPosts(successPosts)
            setIsLoading(false)
        }

        getPosts()
    }, [])

    console.log('PostsQueryView render')
    console.log('isPending', isPending)

    return (
        <>
            <TextInput
                labelText='Поиск'
                onChange={searchHandler}
                name='search-todo-query'
                className={styles.searchInput}
                placeholder='Поиск...'
                type='search'
            />
            <PostsQueryAdd createNewPost={createNewPost} />
            {(isLoading || isPending) && <PageLoader />}
            {!isLoading && !isPending && posts && (
                <PostsQueryList posts={searchPosts} />
            )}
        </>
    )
}

export default PostsQueryView
