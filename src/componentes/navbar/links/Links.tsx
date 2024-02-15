import React from 'react'
import Link from 'next/link'

export default function Links() {

    const links = [

        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Sobre',
            path: '/sobre'
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

    return (
        <>
            {links.map((link => (
                <li><Link href={link.path} key={link.title}>{link.title}</Link></li>
            )))}
        </>
    )
}
