// применяем кэлбэк через какое-то время после ввода
// фактически для бОльшей оптимизации useTransition, чтобы не использовать LazyInput
import { useCallback, useRef } from 'react'
import { ITimeoutId } from '../global'

function useDebounce(callback: (...args: []) => void, delay = 0) {
    const timer = useRef<ITimeoutId>()

    return useCallback((...args: []) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay])
}

export default useDebounce
