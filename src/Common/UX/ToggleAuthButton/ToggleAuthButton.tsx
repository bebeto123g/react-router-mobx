import React, { ButtonHTMLAttributes, FC } from 'react'
import { Location, useLocation, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'
import { useStores } from 'Store'

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
        const { UserStore } = useStores()

        const navigate = useNavigate()
        const state = useLocation().state as ILocationState

        const handler = () => {
            UserStore.isAuth ? UserStore.logout() : UserStore.login()
            navigate(state?.from?.pathname || '/', { replace: true })
            if (callback) {
                callback()
            }
        }

        return (
            <button {...props} onClick={handler}>
                {UserStore.isAuth ? signOut : signIn}
            </button>
        )
    },
)

export default ToggleAuthButton
