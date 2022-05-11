import React, { FormEventHandler, useState } from 'react'
import { observer } from 'mobx-react'

import $user, { IUserFormState } from '../store/User'
import TextInput from '../components/Forms/TextInput/TextInput'
import Container from '../UI/Container/Container'

const HomeView = observer(() => {
    const [form, setForm] = useState<IUserFormState>({
        name: $user.userForm.name,
        surname: $user.userForm.surname,
    })

    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        // eslint-disable-next-line
        $user.setUserForm(form)
    }

    return (
        <Container>
            <h1>Home Page</h1>
            <form onSubmit={submitHandler}>
                <TextInput
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                    name={'name'}
                    labelText='Имя'
                />
                <TextInput
                    value={form.surname}
                    onChange={(e) => setForm((prev) => ({ ...prev, surname: e.target.value }))}
                    name={'lastName'}
                    labelText='Фамилия'
                />
                <button type='submit'>Отправить форму</button>
            </form>
        </Container>
    )
})

export default HomeView
