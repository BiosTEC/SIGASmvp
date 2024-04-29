import React from 'react'
import Links from './links/Links'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { auth } from '@/lib/auth'



export default async function Navbar() {

  const session = await auth()

  return (
    <nav className={styles.container}>
      <Link href='/' className={styles.logo}>
        <Image src='/icons/logoSigas.svg' alt='Logo SIGAE' fill priority quality={100} />
      </Link>
      <div>
        <Links session={session} />
      </div>
    </nav>
  )
}
