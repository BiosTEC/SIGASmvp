'use client'
import React from 'react'
import styles from './navLink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
    item: {
        path: string;
        title: string;
    }
}

export default function NavLink({ item }: NavLinkProps) {

    const pathname = usePathname();

    return (
        <Link className={`${styles.container}
         ${pathname === item.path && styles.active}`} href={item.path} key={item.title}>{item.title}</Link>
    )
}
