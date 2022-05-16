import React, { FC } from 'react'
import Container from '../UI/Container/Container'
import ToggleAuthButton from '../UX/ToggleAuthButton/ToggleAuthButton'

const LoginView: FC = () => {
    return (
        <Container>
            <h1>Login Page</h1>
            <ToggleAuthButton signIn='Войти' signOut='Выйти' />
        </Container>
    )
}

export default LoginView
