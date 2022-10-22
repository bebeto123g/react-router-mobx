import React, { FormEventHandler } from 'react'
import { observer } from 'mobx-react'

import $user from '../store/User'
import $modal from '../store/Modal'

import TextInput from '../components/Forms/TextInput/TextInput'
import Container from '../UI/Container/Container'
import HookForms from '../components/HookForms/HookForms'
import Modal from '../components/Modal/Modal'

const HomeView = observer(() => {
    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        console.log($user.state)
    }

    const openModalConfirm = () => {
        $modal.show()
    }

    return (
        <Container>
            <h1>Home Page</h1>
            <form onSubmit={submitHandler}>
                <TextInput
                    value={$user.name}
                    onChange={(e) => $user.setName(e.target.value)}
                    name={'name'}
                    labelText='Имя'
                />
                <TextInput
                    value={$user.surname}
                    onChange={(e) => $user.setSurname(e.target.value)}
                    name={'lastName'}
                    labelText='Фамилия'
                />
                <button type='submit'>Отправить форму</button>
            </form>
            <br />
            <hr />
            <br />
            <button onClick={openModalConfirm}>Открыть модалку</button>
            <Modal />
            {/* <HookForms /> */}
        </Container>
    )
})

export default HomeView
