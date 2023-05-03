import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { PageLoader } from 'Common'
import { APIServiceJsonServer } from 'Core/API/JsonServer/service'

const TodoQueryPage = () => {
    const { data, isLoading, isSuccess } = useQuery({
        queryFn: async () => await APIServiceJsonServer.getTodos(),
        queryKey: ['json-server-todos', 'all'],
    })

    if (isLoading) {
        return <PageLoader />
    }

    return (
        <>
            <h1>TodoQueryPage Page</h1>
            <ul>
            {
                isSuccess && data.map(todo => (<li key={todo.id}>{todo.title}</li>))
            }
            </ul>

        </>
    )
}

export default TodoQueryPage
