import React, { FC, MouseEventHandler, PropsWithChildren, ReactNode } from 'react'
import { CSSTransition } from 'react-transition-group'
import { ButtonX, Portal } from 'Common'
import './Modal.scss'

interface IBaseModalProps {
    isShow: boolean
    onClose: () => void
    title: ReactNode
    actions: ReactNode[]
}

const BaseModal: FC<PropsWithChildren<IBaseModalProps>> = ({
    isShow,
    onClose,
    title,
    children,
}) => {
    const handleOverlay: MouseEventHandler<HTMLDivElement> = (event) => {
        if (event.target === event.currentTarget) {
            onClose()
        }
    }

    return (
        <Portal>
            <CSSTransition in={isShow} timeout={400} classNames='modal-css' unmountOnExit>
                <div
                    className='modal'
                    id='exampleModal'
                    tabIndex={-1}
                    aria-labelledby='exampleModalLabel'
                    aria-hidden='true'
                    onClick={handleOverlay}
                >
                    <div className='modal-dialog modal-dialog-centered'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h3 className='modal-title' id='exampleModalLabel'>
                                    {title}
                                </h3>
                                <ButtonX className='btn-close' onClick={onClose} />
                            </div>
                            <div className='modal-body'>{children}</div>
                            <div className='modal-footer'>
                                <button
                                    type='button'
                                    className='btn btn-secondary'
                                    onClick={onClose}
                                >
                                    Close
                                </button>
                                <button type='button' className='btn btn-primary'>
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </Portal>
    )
}

export default BaseModal
