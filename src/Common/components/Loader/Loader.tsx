import React, { FC } from 'react'
import './Loader.scss'

export type TypeLoaderProps = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'black' | 'green' | 'white' | 'orange'
    className?: string
}

const Loader: FC<TypeLoaderProps> = ({ size = 'md', color = 'white', className = '' }) => {
    return (
        <div className={`lds-roller lds-roller--${size} lds-roller--${color} ${className}`}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}

export default Loader
