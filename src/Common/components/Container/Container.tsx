import React, { AllHTMLAttributes } from 'react'
import styles from './Container.module.scss'

const Container = ({ children, className = '', ...props }: AllHTMLAttributes<HTMLDivElement>) => (
    <div className={`${styles.container} ${className}`} {...props}>
        {children}
    </div>
)

export default Container
