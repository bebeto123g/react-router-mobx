import React, { HTMLAttributes } from 'react'
import styles from './ButtonX.module.scss'

const ButtonX = ({ className = '', ...props }: HTMLAttributes<HTMLButtonElement>) => {
    return (
        <button {...props} className={`${styles.remove} ${className ?? ''}`}>
            &times;
        </button>
    )
}

export default ButtonX
