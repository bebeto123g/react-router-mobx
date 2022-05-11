import { makeAutoObservable } from 'mobx'

export interface IUserFormState {
    name: string
    surname: string
}

export interface IUserState {
    userForm: IUserFormState
    isAuth: boolean
}

class User implements IUserState {
    private static USER_FORM_STORAGE_KEY = 'storage/user-form'

    userForm = {
        name: '',
        surname: '',
    }
    isAuth = false

    constructor() {
        this.getStateFromLocalStorage()
        makeAutoObservable(this)
    }

    setUserForm(form: IUserFormState): void {
        this.userForm = form
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
        this.userForm = storage.userForm
    }

    setStateToLocalStorage(): void {
        localStorage.setItem(User.USER_FORM_STORAGE_KEY, JSON.stringify(this.state))
    }

    get state(): IUserState {
        return {
            userForm: {
                name: this.userForm.name,
                surname: this.userForm.surname,
            },
            isAuth: this.isAuth,
        }
    }
}

export default new User()
