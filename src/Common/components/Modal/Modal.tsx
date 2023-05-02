import React, { MouseEventHandler } from 'react'
import { observer } from 'mobx-react'
import { CSSTransition } from 'react-transition-group'
import { useStores } from 'Store'
import { ButtonX, Portal } from 'Common'
import './Modal.scss'

const Modal = observer(() => {
    const { modalStore } = useStores()

    const handleOverlay: MouseEventHandler<HTMLDivElement> = (event) => {
        if (event.target === event.currentTarget) {
            modalStore.hide()
        }
    }

    return (
        <Portal>
            <CSSTransition
                in={modalStore.isModal}
                timeout={400}
                classNames='modal-css'
                unmountOnExit
            >
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
                                    Modal title
                                </h3>
                                <ButtonX className='btn-close' onClick={() => modalStore.hide()} />
                            </div>
                            <div className='modal-body'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                                amet atque aut commodi cum cumque distinctio ducimus ea error
                                explicabo harum incidunt ipsum iste labore laboriosam magni nam
                                necessitatibus nobis perferendis possimus praesentium, quia rerum
                                sapiente tempora ullam veniam voluptatibus?
                            </div>
                            <div className='modal-footer'>
                                <button
                                    type='button'
                                    className='btn btn-secondary'
                                    onClick={() => modalStore.hide()}
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
})

export default Modal
