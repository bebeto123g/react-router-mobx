import { APIProvider } from 'Core/API/provider'
import { IServiceRequestParams } from '../interfaces'
import { ITodo } from 'Modules/Todos'
import { IPost } from 'Modules/Posts'
import { JSON_PLACEHOLDER_BASE_URL } from './constants'

export class APIServiceJsonPlaceholder {
    static async getTodosPage({ page = 0, pageSize = 10 }: IServiceRequestParams = {}): Promise<
        ITodo[]
    > {
        return APIProvider.get<ITodo[]>(
            `${JSON_PLACEHOLDER_BASE_URL}/todos?_start=${pageSize * page}&_limit=${pageSize}`,
        )
    }

    static async getPostsPage({ page = 0, pageSize = 10 }: IServiceRequestParams = {}): Promise<
        IPost[]
    > {
        return APIProvider.get<IPost[]>(
            `${JSON_PLACEHOLDER_BASE_URL}/posts?_start=${pageSize * page}&_limit=${pageSize}`,
        )
    }
}
