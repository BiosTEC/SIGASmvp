import React from 'react'
import styles from './dashboard.module.css'
import UserProdutos from '@/componentes/userProdutos/UserProdutos'
import { SessionProvider } from 'next-auth/react'

export default function Dashboard() {
  return (
    <section className={styles.section}>

      Dashboard
      <h2>Produtos:</h2>
      <SessionProvider>
        <UserProdutos />
      </SessionProvider>
    </section>
  )
}
