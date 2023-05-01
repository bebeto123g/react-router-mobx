import React from 'react'
import styles from './Header.module.scss'
import Container from 'Common/components/Container/Container'
import AppNavLink from '../NavLink/NavLink'
import BackButton from 'Common/UX/BackButton/BackButton'
import ToggleAuthButton from 'Common/UX/ToggleAuthButton/ToggleAuthButton'

const Header = () => {
    // const match = useMatch('/list/:search')
    // будет !== null когда роуты совпадают, хорошо для if

    return (
        <div className={styles.header}>
            <Container className={styles.container}>
                <AppNavLink to={'/'}>Домой</AppNavLink>
                <AppNavLink to={'/list'}>Список</AppNavLink>
                <AppNavLink to={'/about'}>О проекте</AppNavLink>
                <AppNavLink to={'/memo'}>Memo</AppNavLink>
                <AppNavLink to={'/posts'}>Посты</AppNavLink>
                <BackButton className={styles.backBtn}>Назад</BackButton>
                <ToggleAuthButton className={styles.backBtn} signIn='Войти' signOut='Выйти' />
            </Container>
        </div>
    )
}

export default Header
