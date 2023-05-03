import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import { MainModalContext } from '../components/MainModalWrapper'
import UserForm from '../components/UserForm'

const MainView = observer(() => {
    const { onShowModal } = useContext(MainModalContext)

    return (
        <>
            <h1>Home Page</h1>
            <UserForm />
            <br />
            <hr />
            <br />
            <button onClick={onShowModal}>Открыть модалку</button>
        </>
    )
})

export default MainView
