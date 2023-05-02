import { APIProvider } from 'Core/API/provider'
import { IServiceRequestParams } from '../interfaces'
import { ITodo } from 'Modules/Todos'
import { IPost } from 'Modules/Posts'

export class APIServiceJson {
    private static BASE_URL = 'https://jsonplaceholder.typicode.com/'

    static async getTodosPage({
        page = 0,
        pageSize = 10,
    }: IServiceRequestParams = {}): Promise<ITodo[]> {
        return APIProvider.get<ITodo[]>(
            `${APIServiceJson.BASE_URL}todos?_start=${pageSize * page}&_limit=${pageSize}`,
        )
    }

    static async getPostsPage({
        page = 0,
        pageSize = 10,
    }: IServiceRequestParams = {}): Promise<IPost[]> {
        return APIProvider.get<IPost[]>(
            `${APIServiceJson.BASE_URL}posts?_start=${pageSize * page}&_limit=${pageSize}`,
        )
    }
}
