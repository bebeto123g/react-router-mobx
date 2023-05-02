import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import Container from 'Common/components/Container/Container'
import { TodoSearchForm, TodoSearchListView } from 'Modules/Todos'

const TodoListView = () => {
    const [SearchParams] = useSearchParams()
    const search = SearchParams.get('search')

    return (
        <Container>
            <h1>TodoList Page</h1>
            <TodoSearchForm />
            {search ? <TodoSearchListView search={search} /> : <Outlet />}
        </Container>
    )
}

export default TodoListView
