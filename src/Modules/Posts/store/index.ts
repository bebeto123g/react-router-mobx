import { makeAutoObservable } from 'mobx'
import { APIServiceJsonPlaceholder } from 'Core/API/JsonPlaceholder/service'
import { IPost } from '../interfaces'

export type IPostNewProps = Omit<IPost, 'id'>

class Posts {
    posts: IPost[] | null = null

    constructor() {
        makeAutoObservable(this)
    }

    async get(page = 0) {
        const posts = await APIServiceJsonPlaceholder.getPostsPage({ page })
        this.setPosts(posts)
    }

    add({ title, body, userId }: IPostNewProps) {
        this.posts?.push({
            id: Math.max(0, Math.max(...this.posts.map(({ id }) => id))) + 1,
            userId,
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
