import axios from 'axios'
import { IPost } from '../store/Posts'
import { ITodo } from '../store/Todos'

export class APIJson {
    private static URL = 'https://jsonplaceholder.typicode.com'
    private static PAGE_SIZE = 10

    static async getTodosPage(page = 0): Promise<ITodo[]> {
        const response = await axios.get<ITodo[]>(
            APIJson.URL +
                `/todos?_start=${APIJson.PAGE_SIZE * page}&_limit=${
                    APIJson.PAGE_SIZE
                }`,
        )
        return response.data
    }

    static async getPostsPage(page = 0): Promise<IPost[]> {
        const response = await axios.get<IPost[]>(
            APIJson.URL +
                `/posts?_start=${APIJson.PAGE_SIZE * page}&_limit=${
                    APIJson.PAGE_SIZE
                }`,
        )
        return response.data
    }
}
