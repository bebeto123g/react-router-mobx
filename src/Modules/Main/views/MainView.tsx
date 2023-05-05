import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import { ActionButton } from 'Common'
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
            <ActionButton
                onClick={onShowModal}
                label={'Открыть модалку'}
            />
        </>
    )
})

export default MainView
