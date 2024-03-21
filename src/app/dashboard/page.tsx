import React from 'react'
import styles from './dashboard.module.css'
import UserProdutos from '@/componentes/userProdutos/UserProdutos'
import { SessionProvider } from 'next-auth/react'
import UserCharts from '@/componentes/userCharts/UserCharts'

export default function Dashboard() {
  return (
    <section className={styles.section}>
      <h2>Últimos Anúncios</h2>
      <SessionProvider>
        <UserProdutos />
        <h2>Dados de Energia</h2>
        <UserCharts />
      </SessionProvider>
    </section>
  )
}
