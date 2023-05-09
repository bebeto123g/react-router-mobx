import React, { useDeferredValue } from 'react'
import { IPostQuery } from 'Modules/PostsQuery/interfaces'
import PostQuery from 'Modules/PostsQuery/components/PostQuery'

interface IPostsQueryListProps {
    posts: IPostQuery[]
}

const PostsQueryList = ({ posts }: IPostsQueryListProps) => {
    /**
     * useDeferredValue применяется вместо startTransition,
     * если нет возможности повлиять на изменение состояния,
     * например если вычисления идут в других бибилиотеках,
     * приоритет все таки за useTransition, который плюсом дает isPending
     * */
    const deferredPosts = useDeferredValue(posts)
    return (
        <div>
            {deferredPosts.map((post) => (
                <PostQuery post={post} key={post.id} />
            ))}
        </div>
    )
}

export default PostsQueryList
