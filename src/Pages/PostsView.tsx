import React from 'react'
import Container from 'Common/UI/Container/Container'
import PostsList from 'Modules/components/Post/PostsList'

const PostsView = () => {
    return (
        <Container>
            <h1>Posts Page</h1>
            <PostsList />
        </Container>
    )
}

export default PostsView
