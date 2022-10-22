import React from 'react'
import { observer } from 'mobx-react'
import { CSSTransition } from 'react-transition-group'

import $modal from '../../store/Modal'

import './Modal.scss'

const Modal = observer(() => {
    return (
        <CSSTransition
            in={$modal.isModal}
            timeout={400}
            classNames="modal-css"
            unmountOnExit
        >
            <div
                className="modal "
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Modal title
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => $modal.hide()}
                            ></button>
                        </div>
                        <div className="modal-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aliquid amet atque aut commodi cum cumque
                            distinctio ducimus ea error explicabo harum incidunt
                            ipsum iste labore laboriosam magni nam
                            necessitatibus nobis perferendis possimus
                            praesentium, quia rerum sapiente tempora ullam
                            veniam voluptatibus?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => $modal.hide()}
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
})

export default Modal
