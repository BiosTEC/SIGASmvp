'use client'
import React, { useState } from 'react'
import NavLink from './navLink/NavLink'
import styles from './links.module.css'
import Image from 'next/image'

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
            <Image className={styles.menuButton}
                src='/icons/menu.svg'
                alt='imagem de menu'
                width={30} height={30}
                onClick={() => setOpen((prev) => !prev)} />
            {open && (
                <menu className={styles.mobileLinks}>
                    {links.map((link) => (
                        <li key={link.title} onClick={() => setOpen((prev) => !prev)}><NavLink item={link} /></li>
                    ))}
                </menu>
            )}
        </div>
    )
}
