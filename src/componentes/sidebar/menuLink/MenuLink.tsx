'use client'
import Link from 'next/link'
import React from 'react'
import styles from './menuLink.module.css'
import { usePathname } from 'next/navigation'

export default function MenuLink({ item }: any) {
    const pathname = usePathname();
    return (
        
        <Link className={`${styles.links}
        ${pathname === item.path && styles.active}`} href={item.path}>{item.icon} {item.title}
        </Link>
    )
}
