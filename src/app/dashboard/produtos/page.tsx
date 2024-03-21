import React from 'react'
import styles from './produtos.module.css'
import UserProdutos from '@/componentes/userProdutos/UserProdutos'
import { SessionProvider } from 'next-auth/react'

export default function ProdutosPage() {
  return (
    <section className={styles.section}>
      <h2>Produtos:</h2>
      <SessionProvider>
        <UserProdutos />
      </SessionProvider>
    </section>
  )
}
