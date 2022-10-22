import { makeAutoObservable } from 'mobx'

class Modal {
    isModal = false

    constructor() {
        makeAutoObservable(this)
    }

    show() {
        this.isModal = true
    }

    hide() {
        this.isModal = false
    }

    toggle() {
        this.isModal = !this.isModal
    }
}

export default new Modal()
