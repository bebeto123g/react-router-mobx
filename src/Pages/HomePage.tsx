import React, { FormEventHandler } from 'react'
import { observer } from 'mobx-react'
import { useStores } from 'Store'
import Container from 'Common/components/Container/Container'
import Modal from 'Common/components/Modal/Modal'
import TextInput from 'Common/components/Forms/TextInput/TextInput'


const HomePage = observer(() => {
    const { userStore, modalStore } = useStores()

    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        console.log(userStore.state)
    }

    const openModalConfirm = () => {
        modalStore.show()
    }

    return (
        <Container>
            <h1>Home Page</h1>
            <form onSubmit={submitHandler}>
                <TextInput
                    value={userStore.name}
                    onChange={(e) => userStore.setName(e.target.value)}
                    name={'name'}
                    labelText='Имя'
                />
                <TextInput
                    value={userStore.surname}
                    onChange={(e) => userStore.setSurname(e.target.value)}
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

export default HomePage
