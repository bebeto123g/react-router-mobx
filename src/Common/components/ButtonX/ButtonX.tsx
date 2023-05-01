import React, { FC, HTMLAttributes } from 'react'
import styles from './ButtonX.module.scss'

const ButtonX: FC<HTMLAttributes<HTMLButtonElement>> = ({ className = '', ...props }) => {
    return (
        <button {...props} className={`${styles.remove} ${className ?? ''}`}>
            &times;
        </button>
    )
}

export default ButtonX
