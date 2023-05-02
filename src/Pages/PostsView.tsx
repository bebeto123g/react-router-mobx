import React from 'react'
import Container from 'Common/components/Container/Container'
import PostsList from 'Modules/Posts/components/PostsList'

const PostsView = () => {
    return (
        <Container>
            <h1>Posts Page</h1>
            <PostsList />
        </Container>
    )
}

export default PostsView
