import { makeAutoObservable } from 'mobx'
import { APIJson } from '../API/APIJson'
import $user from './User'

export interface IPost {
    userId: number
    id: number
    title: string
    body: string
}

export type IPostNewProps = Omit<IPost, 'id' | 'userId'>

class Posts {
    posts: IPost[] | null = null

    constructor() {
        makeAutoObservable(this)
    }

    async get(page = 0) {
        const posts = await APIJson.getPostsPage(page)
        this.setPosts(posts)
    }

    add({ title, body }: IPostNewProps) {
        this.posts?.push({
            id: Math.max(0, Math.max(...this.posts.map(({ id }) => id))) + 1,
            userId: $user.id,
            title,
            body,
        })
    }

    // update(id: number, title: string) {}

    remove(id: number) {
        const index = this.findTodoIndex(id)
        if (!this.posts || index === undefined || index < 0) return
        this.posts.splice(index, 1)
    }

    setPosts(posts: IPost[]) {
        this.posts = posts
    }

    findTodoIndex(id: number) {
        return this.posts?.findIndex((post) => post.id === id)
    }
}

export default new Posts()
