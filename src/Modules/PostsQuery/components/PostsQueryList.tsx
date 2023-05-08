import React from 'react'
import { IPostQuery } from 'Modules/PostsQuery/interfaces'
import PostQuery from 'Modules/PostsQuery/components/PostQuery'

interface IPostsQueryListProps {
    posts: IPostQuery[]
}

const PostsQueryList = ({ posts }: IPostsQueryListProps) => {
    return (
        <div>
            {posts.map((post) => (
                <PostQuery post={post} key={post.id} />
            ))}
        </div>
    )
}

export default PostsQueryList
