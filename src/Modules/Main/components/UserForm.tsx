import React, { ChangeEventHandler, FormEventHandler, useCallback } from 'react'
import { observer } from 'mobx-react'
import { useStores } from 'Store'
import { TextInputLazy } from 'Common'

const UserForm = observer(() => {
    const { UserStore } = useStores()

    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        console.log({...UserStore.state})
    }

    const changeHandler: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        const { name, value } = event.target
        UserStore.setState({ [name]: value })
    }, [UserStore])

    return (
        <form onSubmit={submitHandler}>
            <TextInputLazy
                value={UserStore.state.name}
                onChange={changeHandler}
                name={'name'}
                labelText='Имя'
            />
            <TextInputLazy
                value={UserStore.state.surname}
                onChange={changeHandler}
                name={'surname'}
                labelText='Фамилия'
            />
            <button type='submit'>Редактировать</button>
        </form>
    )
})

export default UserForm
