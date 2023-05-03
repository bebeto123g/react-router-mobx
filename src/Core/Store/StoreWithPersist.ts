import { action, makeObservable, observable } from 'mobx'

export class StoreWithPersist<TState extends object> {
    private STORAGE_KEY: string
    public state: TState

    constructor(state: TState, key: string) {
        this.state = state
        this.STORAGE_KEY = `persist/${key}`
        this.getStateFromLocalStorage()

        makeObservable(this, {
            state: observable,
            setState: action,
        })
    }

    public setState(state: Partial<TState>) {
        this.state = { ...this.state, ...state }
        this.setStateToLocalStorage()
    }

    private getStateFromLocalStorage(): void {
        const storageState = localStorage.getItem(this.STORAGE_KEY)
        if (storageState) {
            const storage: TState = JSON.parse(storageState)
            this.setState(storage)
        }
    }

    private setStateToLocalStorage(): void {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state))
    }
}
