import Image from 'next/image'
import React from 'react'
import styles from './quemSomos.module.css'
import agricultura from '@/../public/solarFarm.webp'
import HeroImgHeader from '@/componentes/heroImageHeader/HeroImgHeader'

export default function QuemSomos() {
  return (
    <section className={styles.section}>
      <HeroImgHeader img={agricultura} />
      <div className={styles.textSection}>
        <h1>Quem Somos</h1>
        <h2>Sustentabilidade financeira para produtores.</h2>
        <p>O SIGAS, ecossistema que apresenta uma proposta inovadora ao viabilizar trocas sustentáveis e facilitar as vendas de produtos agroecológicos, como também monitora a geração e consumo de energia renovável para comercialização de excedentes.</p>
      </div>
    </section>
  )
}
