import React, { FC } from 'react'
import { ToggleAuthButton } from 'Common'

const LoginPage: FC = () => {
    return (
        <>
            <h1>Login Page</h1>
            <ToggleAuthButton signIn='Войти' signOut='Выйти' />
        </>
    )
}

export default LoginPage
