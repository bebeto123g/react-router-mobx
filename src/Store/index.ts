import { createContext, useContext } from 'react'
import { TodoStore } from 'Modules/Todos'
import { PostStore } from 'Modules/Posts'
import userStore from 'Modules/Main/store/User'
import modalStore from 'Modules/Main/store/Modal'

export const stores = {
    TodoStore,
    PostStore,
    userStore,
    modalStore,
}

export type TStore = typeof stores

const StoreContext = createContext<TStore>(stores)
export const useStores = () => useContext(StoreContext)
