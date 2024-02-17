import React from 'react'
import Links from './links/Links'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <Link href='/' className={styles.logo}>
        <Image src='/icons/logoSigas.svg' alt='Logo SIGAS' fill priority quality={100}/>
      </Link>
      <div>
        <Links />
      </div>
    </nav>
  )
}
