import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

test('renders learn', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    )
    expect(screen.getByText(/home page/i)).toBeInTheDocument()
    expect(screen.getByText(/войти/i)).toBeInTheDocument()
})
