import React from 'react'
import NavLink from './navLink/NavLink'
import styles from './links.module.css'

export default function Links() {

    const links = [

        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Quem Somos',
            path: '/quem-somos'
        },
        {
            title: 'Contato',
            path: '/contato'
        },
        {
            title: 'Mercado',
            path: '/mercado'
        },
    ]
    /* temporary */
    const session = true
    const isAdmin = true

    return (
        <>
            {/* Mapeando o array de links em elementos */}
            {links.map((link => (
                <li><NavLink item={link} key={link.title} /></li>
            )))}
            {/* Blodo de condicionais para mostrar o link de admin, e trocar o link de login pelo botão de logout */}
            {
                session ? (
                    <>
                        {isAdmin && <li><NavLink item={{ title: 'Admin', path: '/admin' }} /></li>}
                        <li><button className={styles.logout}>Logout</button></li>
                    </>
                ) : (
                    <NavLink item={{ title: 'Login', path: '/Login' }} />
                )}
        </>
    )
}
