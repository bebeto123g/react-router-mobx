import { action, computed, makeObservable } from 'mobx'
import { StoreWithPersist } from 'Core/Store/StoreWithPersist'

const initialUserState = {
    name: '',
    surname: '',
    isAuth: false,
    id: 123,
}

export type TUserState = typeof initialUserState

class User extends StoreWithPersist<TUserState> {
    constructor() {
        super(initialUserState, 'user-form')
        makeObservable(this, {
            login: action,
            logout: action,
            isAuth: computed,
        })
    }

    public login(): void {
        this.setState({ isAuth: true })
    }

    public logout(): void {
        this.setState({ isAuth: false })
    }

    public get isAuth() {
        return this.state.isAuth
    }
}

export default new User()
