import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { observer } from 'mobx-react'
import { useStores } from 'Store'

{/* @ts-ignore */}
const RequireAuth = observer(({ children }) => {
    const location = useLocation()
    const { userStore } = useStores()

    if (!userStore.isAuth) {
        // при переадресации можно прокидывать через state, он так же есть в useNavigate
        return <Navigate to={'/login'} state={{ from: location }} />
    }

    return children
})

export default RequireAuth
