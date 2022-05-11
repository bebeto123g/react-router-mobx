import React, { ButtonHTMLAttributes, FC } from 'react'
import { observer } from 'mobx-react'

import $user from '../../store/User'

interface IToggleAuthButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    signin: string
    signout: string
    callback?: () => void
}

const ToggleAuthButton: FC<IToggleAuthButton> = observer(
    ({ signin, signout, callback, ...props }) => {
        const handler = () => {
            $user.isAuth ? $user.logout() : $user.login()

            if (callback) {
                callback()
            }
        }

        return (
            <button {...props} onClick={handler}>
                {$user.isAuth ? signout : signin}
            </button>
        )
    },
)

export default ToggleAuthButton
