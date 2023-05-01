import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

import HomeView from 'Pages/HomeView'
import RequireAuth from 'Common/HOC/RequireAuth'
import TodoList from 'Modules/components/Todo/TodoList'

const TodoListView = lazy(() => import('Pages/TodoListView'))
const AboutView = lazy(() => import('Pages/AboutView'))
const LoginView = lazy(() => import('Pages/LoginView'))
const TodoView = lazy(() => import('Pages/TodoView'))
const TestMemoView = lazy(() => import('Pages/TestMemoView'))
const PostsView = lazy(() => import('Pages/PostsView'))

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomeView />,
    },
    {
        path: 'list',
        element: <TodoListView />,
        children: [
            {
                path: '',
                element: <TodoList />,
            },
            {
                path: ':todoId',
                element: <TodoView />,
            },
        ],
    },
    {
        path: 'about',
        element: (
            <RequireAuth>
                <AboutView />
            </RequireAuth>
        ),
    },
    {
        path: 'login',
        element: <LoginView />,
    },
    {
        path: 'memo',
        element: (
            <RequireAuth>
                <TestMemoView />
            </RequireAuth>
        ),
    },
    {
        path: 'posts',
        element: <PostsView />,
    },
    {
        path: '*',
        element: <Navigate to='/' replace />,
    },
]
