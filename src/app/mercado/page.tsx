import React from 'react'
import styles from './mercado.module.css'
import MercadoCard from '@/componentes/mercadoCard/MercadoCard'

export default function MecadoPage() {
  return (
    <section className={styles.section}>
      <div className={styles.post}>
        <MercadoCard
          img='/bananas.webp'
          alt='imagem de banada'
          data='02.02.2024'
          titulo='Bananas'
          descricao='Banana prata, banana maçã e banana da terra'
          link='/mercado/post' />
      </div>
      <div className={styles.post}>
        <MercadoCard
          img='/bananas.webp'
          alt='imagem de banada'
          data='02.02.2024'
          titulo='Bananas'
          descricao='Banana prata, banana maçã e banana da terra'
          link='/mercado/post' />
      </div>
      <div className={styles.post}>
        <MercadoCard
          img='/bananas.webp'
          alt='imagem de banada'
          data='02.02.2024'
          titulo='Bananas'
          descricao='Banana prata, banana maçã e banana da terra'
          link='/mercado/post' />
      </div>
      <div className={styles.post}>
        <MercadoCard
          img='/bananas.webp'
          alt='imagem de banada'
          data='02.02.2024'
          titulo='Bananas'
          descricao='Banana prata, banana maçã e banana da terra'
          link='/mercado/post' />
      </div>


    </section>
  )
}
