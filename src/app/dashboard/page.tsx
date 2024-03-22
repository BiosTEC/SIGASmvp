import React from 'react'
import styles from './dashboard.module.css'
import UserProdutos from '@/componentes/userProdutos/UserProdutos'
import { SessionProvider } from 'next-auth/react'
import UserCharts from '@/componentes/userCharts/UserCharts'
import UserChartCard from '@/componentes/userChartCard/UserChartCard'

export default function Dashboard() {
  return (
    <section className={styles.section}>
      <div className={styles.cards}>
      <UserChartCard titulo='Última Venda' valor='R$:251,51' />
      <UserChartCard titulo='Total em Vendas' valor='R$:1358,51'/>
      <UserChartCard titulo='Consumo último mês' valor='140KwH'/>
      <UserChartCard titulo='Geração último mês' valor='160KwH'/>
      </div>
      <h2>Últimos Anúncios</h2>
      <SessionProvider>
        <UserProdutos />
        <h2>Dados de Energia</h2>
        <UserCharts />
      </SessionProvider>
    </section>
  )
}
