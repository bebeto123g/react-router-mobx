import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { observer } from 'mobx-react'
import { useStores } from 'Store'

interface IRequireAuthProps {
    children: JSX.Element
}

const RequireAuth = observer(({ children }: IRequireAuthProps) => {
    const location = useLocation()
    const { UserStore } = useStores()

    if (!UserStore.isAuth) {
        // при переадресации можно прокидывать через state, он так же есть в useNavigate
        return <Navigate to={'/login'} state={{ from: location }} />
    }

    return children
})

export default RequireAuth
