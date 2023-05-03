import { APIProvider } from 'Core/API/provider'
import { Utils } from 'Core/Utils'

export interface ITodoJson {
    id: number
    title: string
    completed: boolean
}

export class APIServiceJsonServer {
    private static BASE_URL = 'http://localhost:3004/'

    static async getTodos(): Promise<ITodoJson[]> {
        await Utils.delay(1000)
        return APIProvider.get<ITodoJson[]>(`${APIServiceJsonServer.BASE_URL}todos`)
    }
}
