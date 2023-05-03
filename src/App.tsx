import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from 'Router/routes'
import { Container, Header, PageLoader } from 'Common'
import './Styles/global.scss'

function App() {
    const appRoutes = useRoutes(routes)

    return (
        <>
            <Header />
            <Container>
                <Suspense fallback={<PageLoader />}>{appRoutes}</Suspense>
            </Container>
        </>
    )
}

export default App
