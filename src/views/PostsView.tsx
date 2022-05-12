import React from 'react'

import PostsList from '../components/Post/PostsList'
import Container from '../UI/Container/Container'

const PostsView = () => {
    return (
        <Container>
            <h1>Posts Page</h1>
            <PostsList />
        </Container>
    )
}

export default PostsView
