import React, { FC } from 'react'
import { NavLinkProps, NavLink } from 'react-router-dom'
import { Utils } from 'Core/Utils'
import styles from './NavLink.module.scss'

const AppNavLink: FC<NavLinkProps> = ({ children, className = '', ...props }) => {
    return (
        <NavLink
            {...props}
            className={({ isActive }) => `${Utils.classnames({
                [styles.link]: true,
                [styles.active]: isActive,
            })} ${className}`
            }
        >
            {children}
        </NavLink>
    )
}

export default AppNavLink
