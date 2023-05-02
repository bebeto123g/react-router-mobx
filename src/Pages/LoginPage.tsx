import React, { FC } from 'react'
import Container from 'Common/components/Container/Container'
import ToggleAuthButton from 'Common/UX/ToggleAuthButton/ToggleAuthButton'

const LoginPage: FC = () => {
    return (
        <Container>
            <h1>Login Page</h1>
            <ToggleAuthButton signIn='Войти' signOut='Выйти' />
        </Container>
    )
}

export default LoginPage
