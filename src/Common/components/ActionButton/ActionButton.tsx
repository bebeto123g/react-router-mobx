import React, { ButtonHTMLAttributes, FC } from 'react'
import { Utils } from 'Core/Utils'
import styles from './ActionButton.module.scss'


interface IActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean
    label: string
}

const ActionButton: FC<IActionButtonProps> = ({
    isActive = false,
    className = '',
    label,
    ...props
}) => {
    const classes = Utils.classnames({
        [styles.actionButton]: true,
        [styles.active]: isActive,
        ...(className ? { [className]: true } : {}),
    })

    return (
        <button className={classes} {...props}>
            {label}
        </button>
    )
}

export default ActionButton
