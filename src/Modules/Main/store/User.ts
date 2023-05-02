import { makeAutoObservable } from 'mobx'

export interface IUserState {
    name: string
    surname: string
    isAuth: boolean
    id: number
}

class User implements IUserState {
    private static USER_FORM_STORAGE_KEY = 'storage/user-form'

    name = ''
    surname = ''
    isAuth = false
    id = 123

    constructor() {
        this.getStateFromLocalStorage()
        makeAutoObservable(this)
    }

    setName(name: string): void {
        this.name = name
        this.setStateToLocalStorage()
    }

    setSurname(surname: string): void {
        this.surname = surname
        this.setStateToLocalStorage()
    }

    login(): void {
        this.isAuth = true
        this.setStateToLocalStorage()
    }

    logout(): void {
        this.isAuth = false
        this.setStateToLocalStorage()
    }

    getStateFromLocalStorage(): void {
        const storageUserForm = localStorage.getItem(User.USER_FORM_STORAGE_KEY)
        if (!storageUserForm) return
        const storage: IUserState = JSON.parse(storageUserForm)
        this.isAuth = storage.isAuth
        this.name = storage.name
        this.surname = storage.surname
    }

    setStateToLocalStorage(): void {
        localStorage.setItem(User.USER_FORM_STORAGE_KEY, JSON.stringify(this.state))
    }

    get state(): IUserState {
        return {
            name: this.name,
            surname: this.surname,
            isAuth: this.isAuth,
            id: this.id,
        }
    }
}

export default new User()
