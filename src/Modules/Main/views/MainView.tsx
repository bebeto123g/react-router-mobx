import React, { FormEventHandler, useContext } from 'react'
import { observer } from 'mobx-react'
import { useStores } from 'Store'
import { Container, TextInput } from 'Common'
import { MainModalContext } from '../components/MainModalWrapper'
import MainUserForm from '../components/MainUserForm'

const MainView = observer(() => {
    const { onShowModal } = useContext(MainModalContext)

    return (
        <>
            <h1>Home Page</h1>
            <MainUserForm />
            <br />
            <hr />
            <br />
            <button onClick={onShowModal}>Открыть модалку</button>
        </>
    )
})

export default MainView
