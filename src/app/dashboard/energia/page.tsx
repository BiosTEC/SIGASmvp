import React from 'react'
import styles from './energia.module.css'
import UserCharts from '@/componentes/userCharts/UserCharts'
import { SessionProvider } from 'next-auth/react'

export default function EnergiaPage() {
  return (
    <section className={styles.section}>

      <h2>Energia</h2>
      <SessionProvider>
        <UserCharts />
      </SessionProvider>

    </section>
  )
}
