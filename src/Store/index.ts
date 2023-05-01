import todosStore from './Todos'
import userStore from './User'
import postsStore from './Posts'
import modalStore from './Modal'
import { createContext, useContext } from 'react'

export const stores = {
    todosStore,
    userStore,
    postsStore,
    modalStore,
}

export type TStore = typeof stores

const StoreContext = createContext<TStore>(stores)
export const useStores = () => useContext(StoreContext)
