import axios from 'axios'

export class APIProvider {
    static async get<T>(url: string): Promise<T> {
        const response = await axios.get<T>(url)
        return response.data
    }
}
