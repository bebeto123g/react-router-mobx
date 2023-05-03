import React, { FC } from 'react'
import { BaseModal, IBaseModalProps } from 'Common'

type TBaseModalProps = Omit<IBaseModalProps, 'actions' | 'title'>

const MainModal = ({ onClose, isShow }: TBaseModalProps) => {
    const Actions: FC = () => (
        <>
            <button type='button' className='btn btn-secondary' onClick={onClose}>
                Close
            </button>
            <button type='button' className='btn btn-primary'>
                Save changes
            </button>
        </>
    )

    return (
        <BaseModal onClose={onClose} title='Main Modal title' isShow={isShow} actions={<Actions />}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet atque aut commodi
            cum cumque distinctio ducimus ea error explicabo harum incidunt ipsum iste labore
            laboriosam magni nam necessitatibus nobis perferendis possimus praesentium, quia rerum
            sapiente tempora ullam veniam voluptatibus?
        </BaseModal>
    )
}

export default MainModal
