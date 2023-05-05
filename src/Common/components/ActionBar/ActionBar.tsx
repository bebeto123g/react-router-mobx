import React, { useState } from 'react'
import ActionButton from '../ActionButton/ActionButton'
import styles from './ActionBar.module.scss'

export interface IActionBarModel<T> {
    label: string
    value: T
}

interface IActionBarProps<T> {
    actions: IActionBarModel<T>[]
    defaultAction?: string
    onChange: (value: T) => void
}

const ActionBar = <T extends string>({
    actions,
    onChange,
    defaultAction = '',
}: IActionBarProps<T>) => {
    const [active, setActive] = useState(defaultAction)

    const actionHandler = (value: T) => {
        setActive(value)
        onChange(value)
    }

    return (
        <div className={styles.actionBar}>
            {actions.map(({ label, value }) => (
                <ActionButton
                    key={value}
                    label={label}
                    isActive={active === value}
                    value={value}
                    onClick={() => actionHandler(value)}
                />
            ))}
        </div>
    )
}

export default ActionBar
