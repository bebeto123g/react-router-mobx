import { useCallback, useRef } from 'react'

export function useDebounce(callback: (...args: []) => void, delay = 0) {
    const timer = useRef<ITimeout>()

    return useCallback((...args: []) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay])
}
