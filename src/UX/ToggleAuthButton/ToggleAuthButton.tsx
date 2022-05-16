import React, { ButtonHTMLAttributes, FC } from 'react'
import { Location, useLocation, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'

import $user from '../../store/User'

interface IToggleAuthButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    signIn: string
    signOut: string
    callback?: (...args: []) => void
}

interface ILocationState {
    from?: Location
}

const ToggleAuthButton: FC<IToggleAuthButton> = observer(
    ({ signIn, signOut, callback, ...props }) => {
        const navigate = useNavigate()
        const state = useLocation().state as ILocationState

        const handler = () => {
            $user.isAuth ? $user.logout() : $user.login()
            navigate(state?.from?.pathname || '/', { replace: true })
            if (callback) {
                callback()
            }
        }

        return (
            <button {...props} onClick={handler}>
                {$user.isAuth ? signOut : signIn}
            </button>
        )
    },
)

export default ToggleAuthButton
