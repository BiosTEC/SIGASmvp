import React from 'react'
import styles from './mercado.module.css'
import MercadoCard from '@/componentes/mercadoCard/MercadoCard'
import { getProdutos } from '@/lib/data';

interface Produto {
  userId: number;
  id: number;
  title: string;
  body: string;
}
// USANDO API PARA ACESSAR DATA
const getData = async () => {
  const res = await fetch('http://localhost:3000/api/mercado', {next:{revalidate:1200}}) /* Atualiza e coloca os dados em cache a cada 1200s  */
  if (!res.ok) {
    throw new Error('Erro ao buscar no banco de dados')
  }
  return res.json()
}

export default async function MercadoPage() {
  // USANDO API PARA ACESSAR DATA
  const produtos = await getData()

  

  // ACESSANDO DATA SEM API
  // const produtos = await getProdutos();
  return (
    <section className={styles.section}>
      {produtos.map((produto: Produto) => (
        <div className={styles.produto} key={produto.id}>
          <MercadoCard
            produto={produto}
          />

        </div>

      ))}
    </section>
  )
}
