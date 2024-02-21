import Link from 'next/link'
import React from 'react'
import styles from './errorHandling.module.css'

export default function NotFound() {
  return (
    <div className={styles.section}>
        <h2>Não Encontrado</h2>
        <p>Perdão, a página que você tentou acessar não existe.</p>
        <Link href='/'>Retornar a Home</Link>
    </div>
  )
}
