import React, { ReactNode, createContext, useCallback, useState, useMemo } from 'react'
import MainModal from './MainModal'

interface IPortalProps {
    children: ReactNode
}

export const MainModalContext = createContext<{ onShowModal: () => void }>({
    onShowModal: () => null,
})

const MainModalWrapper = ({ children }: IPortalProps) => {
    const [isShowModal, setIsShowModal] = useState(false)

    const onCloseModal = () => {
        setIsShowModal(false)
    }

    const onShowModal = useCallback(() => {
        setIsShowModal(true)
    }, [])

    const value = useMemo(() => ({ onShowModal }), [onShowModal])

    return (
        <MainModalContext.Provider value={value}>
            {children}
            <MainModal onClose={onCloseModal} isShow={isShowModal} />
        </MainModalContext.Provider>
    )
}

export default MainModalWrapper
