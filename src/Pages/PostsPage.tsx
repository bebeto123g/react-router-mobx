import React from 'react'
import Container from 'Common/components/Container/Container'
import { PostsList } from 'Modules/Posts'

const PostsPage = () => {
    return (
        <Container>
            <h1>Posts Page</h1>
            <PostsList />
        </Container>
    )
}

export default PostsPage
