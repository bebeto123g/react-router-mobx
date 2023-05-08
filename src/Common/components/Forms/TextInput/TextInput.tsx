import React, { ChangeEventHandler, InputHTMLAttributes, KeyboardEventHandler } from 'react'
import styles from './TextInput.module.scss'

interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {
    labelText: string
    onChange: ChangeEventHandler<HTMLInputElement>
}

const TextInput = ({ name, value, onChange, labelText, className, ...props }: ITextInput) => {
    const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (value !== event.target.value) {
            onChange(event)
        }
    }

    const pressEnter: KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === 'Enter') {
            // @ts-ignore
            changeHandler(event)
        }
    }

    return (
        <div className={`${styles.formGroup} ${className ?? ''}`}>
            <label htmlFor={name}>{labelText}</label>
            <input
                name={name}
                type='text'
                value={value}
                onChange={changeHandler}
                onKeyUp={pressEnter}
                className={`${styles.input}`}
                {...props}
            />
        </div>
    )
}

export default TextInput
