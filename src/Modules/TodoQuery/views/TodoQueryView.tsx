import React from 'react'
import TodoQueryList from '../components/TodoQueryList'
import TodoQueryAdd from '../components/TodoQueryAdd'

const TodoQueryView = () => {
    return (
        <>
            <TodoQueryAdd />
            <hr  style={{ margin: '30px 0' }}/>
            <TodoQueryList />
        </>
    )
}

export default TodoQueryView
