import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from 'Router/routes'
import PageLoader from 'Common/UI/Loader/PageLoader'
import Header from 'Modules/components/Header/Header'
import './Styles/global.scss'


function App() {
    const appRoutes = useRoutes(routes)

    return (
        <>
            <Header />
            <Suspense fallback={<PageLoader />}>{appRoutes}</Suspense>
        </>
    )
}

export default App
