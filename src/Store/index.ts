import { createContext, useContext } from 'react'
import { TodoStore } from 'Modules/Todos'
import { PostStore } from 'Modules/Posts'
import { UserStore } from 'Modules/Main'

export const stores = {
    TodoStore,
    PostStore,
    UserStore,
}

export type TStore = typeof stores

const StoreContext = createContext<TStore>(stores)
export const useStores = () => useContext(StoreContext)
