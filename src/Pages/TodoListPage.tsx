import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import { TodoSearchForm, TodoSearchListView } from 'Modules/Todos'

const TodoListView = () => {
    const [SearchParams] = useSearchParams()
    const search = SearchParams.get('search')

    return (
        <>
            <h1>TodoList Page</h1>
            <TodoSearchForm />
            {search ? <TodoSearchListView search={search} /> : <Outlet />}
        </>
    )
}

export default TodoListView
