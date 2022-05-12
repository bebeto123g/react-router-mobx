import { makeAutoObservable } from 'mobx'
import { APIJson } from '../API/APIJson'

export interface IPost {
    userId: number
    id: number
    title: string
    body: string
}

class Posts {
    posts: IPost[] | null = null

    constructor() {
        makeAutoObservable(this)
    }

    async get(page = 0) {
        const posts = await APIJson.getPostsPage(page)
        this.setPosts(posts)
    }

    // add() {}

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
