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
}
