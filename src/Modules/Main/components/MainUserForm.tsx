import React, { FormEventHandler } from 'react'
import { observer } from 'mobx-react'
import { useStores } from 'Store'
import { TextInput } from 'Common'

const MainUserForm = observer(() => {
    const { UserStore } = useStores()

    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        console.log({...UserStore.state})
    }

    return (
        <form onSubmit={submitHandler}>
            <TextInput
                value={UserStore.state.name}
                onChange={(e) => UserStore.setState({ name: e.target.value })}
                name={'name'}
                labelText='Имя'
            />
            <TextInput
                value={UserStore.state.surname}
                onChange={(e) => UserStore.setState({ surname: e.target.value })}
                name={'lastName'}
                labelText='Фамилия'
            />
            <button type='submit'>Отправить форму</button>
        </form>
    )
})

export default MainUserForm
