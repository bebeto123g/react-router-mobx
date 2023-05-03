import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import { RequireAuth } from 'Common'
import MainPage from 'Pages/MainPage'
import TodoListPage from 'Pages/TodoListPage'
import AboutPage from 'Pages/AboutPage'
import LoginPage from 'Pages/LoginPage'
import TestMemoPage from 'Pages/TestMemoPage'
import PostsPage from 'Pages/PostsPage'
import { TodoListView, TodoView } from 'Modules/Todos'

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainPage />,
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
