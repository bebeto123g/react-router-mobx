import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import HomePage from 'Pages/HomePage'
import RequireAuth from 'Common/components/RequireAuth/RequireAuth'
import { TodoListView, TodoView } from 'Modules/Todos'

const TodoListPage = lazy(() => import('Pages/TodoListPage'))
const AboutPage = lazy(() => import('Pages/AboutPage'))
const LoginPage = lazy(() => import('Pages/LoginPage'))
const TestMemoPage = lazy(() => import('Pages/TestMemoPage'))
const PostsPage = lazy(() => import('Pages/PostsPage'))

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: 'list',
        element: <TodoListPage />,
        children: [
            {
                path: '',
                element: <TodoListView />,
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
                <AboutPage />
            </RequireAuth>
        ),
    },
    {
        path: 'login',
        element: <LoginPage />,
    },
    {
        path: 'memo',
        element: (
            <RequireAuth>
                <TestMemoPage />
            </RequireAuth>
        ),
    },
    {
        path: 'posts',
        element: <PostsPage />,
    },
    {
        path: '*',
        element: <Navigate to='/' replace />,
    },
]
