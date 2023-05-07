import { AxiosResponse } from 'axios'
import { JSON_PLACEHOLDER_BASE_URL } from 'Core/API/JsonPlaceholder/constants'
import { JSON_SERVER_BASE_URL } from 'Core/API/JsonServer/constants'

export class Utils {
    /** Утилита для динамической генерации классов */
    static classnames(props: Record<string, string | boolean>): string {
        const arr: Array<string> = []
        Object.entries(props).forEach(([key, value]) => {
            if (value) {
                arr.push(key)
            }
        })
        return arr.join(' ')
    }

    static delay(time = 500) {
        return new Promise((resolve) => {
            setTimeout(resolve, time)
        })
    }

    static createAxiosLog<T>({ data, status, statusText, request, config }: AxiosResponse<T>) {
        const headerCSS = ['color: green; font-weight: lighter;']
        const path = config.url
            ?.replace(JSON_PLACEHOLDER_BASE_URL, '')
            .replace(JSON_SERVER_BASE_URL, '')
        console.groupCollapsed(`%c${config.method} ${path}`, ...headerCSS)
        console.log({ data, status, statusText, request, config })
        console.groupEnd()
    }
}
