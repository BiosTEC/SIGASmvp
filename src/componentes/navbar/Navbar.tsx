import React from 'react'
import Links from './links/Links'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>LOGO</div>
      <div>
        <Links />
      </div>
    </nav>
  )
}
