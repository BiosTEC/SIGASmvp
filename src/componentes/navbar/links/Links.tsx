'use client'
import React, { useState } from 'react'
import NavLink from './navLink/NavLink'
import styles from './links.module.css'

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

export default function Links() {
    const [open, setOpen] = useState(false)
    /* temporary */
    const session = true
    const isAdmin = true

    return (
        <div className={styles.container}>
            <menu className={styles.menu}>
                {/* Mapeando o array de links em elementos */}
                {links.map((link => (
                    <li key={link.path}><NavLink item={link} /></li>
                )))}
                {/* Blodo de condicionais para mostrar o link de admin, e trocar o link de login pelo botão de logout */}
                {
                    session ? (
                        <>
                            {isAdmin && <li key='admin'><NavLink item={{ title: 'Admin', path: '/admin' }} /></li>}
                            <li><button className={styles.logout}>Logout</button></li>
                        </>
                    ) : (
                        <NavLink item={{ title: 'Login', path: '/Login' }} />
                    )}
            </menu>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {open && (
                <menu className={styles.mobileLinks}>
                    {links.map((link) => (
                        <li key={link.title}><NavLink item={link} /></li>
                    ))}
                </menu>
            )}
        </div>
    )
}
