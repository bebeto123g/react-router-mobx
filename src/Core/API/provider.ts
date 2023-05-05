import axios, { AxiosResponse } from 'axios'
import { Utils } from 'Core/Utils'

export class APIProvider {
    static async get<T>(url: string): Promise<T> {
        await Utils.delay(300)
        const response = await axios.get<T>(url)
        return response.data
    }

    static async post<TResponse, TData extends object>(
        url: string,
        data: TData,
    ): Promise<TResponse> {
        await Utils.delay(300)
        const {
            data: responseData,
            status,
            statusText,
        } = await axios.post<TResponse, AxiosResponse<TResponse>, TData>(url, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        console.log({ data: responseData, status, statusText })
        return responseData
    }

    static async patch<TResponse, TData extends object>(
        url: string,
        data: TData,
    ): Promise<TResponse> {
        await Utils.delay(300)
        const {
            data: responseData,
            status,
            statusText,
        } = await axios.patch<TResponse, AxiosResponse<TResponse>, TData>(url, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        console.log({ data: responseData, status, statusText })
        return responseData
    }
}
