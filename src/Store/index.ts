import { createContext, useContext } from 'react'
import todosStore from '../Modules/Todos/store/Todos'
import userStore from '../Modules/Main/store/User'
import postsStore from '../Modules/Posts/store/Posts'
import modalStore from '../Modules/Main/store/Modal'

export const stores = {
    todosStore,
    userStore,
    postsStore,
    modalStore,
}

export type TStore = typeof stores

const StoreContext = createContext<TStore>(stores)
export const useStores = () => useContext(StoreContext)
