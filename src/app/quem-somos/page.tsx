import Image from 'next/image'
import React from 'react'
import styles from './quemSomos.module.css'
import HeroImgHeader from '@/componentes/heroImageHeader/HeroImgHeader'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quem Somos',
  description: 'Sobre o Sistema Inteligente para Gerenciamento de Ativos Sustentáveis',
};

export default function QuemSomos() {
  return (
    <section className={styles.section}>
      <HeroImgHeader img='/solarFarm.webp' alt='imagem de fazenda solar' />
      <div className={styles.textSection}>
        <h1>Quem Somos</h1>
        <div className={styles.bloco2}>
          <h2>Sustentabilidade financeira para produtores.</h2>
          <p>Na BIOS, somos mais que um laboratório de pesquisa, desenvolvimento e inovação — somos impulsionadores de um futuro sustentável. Nossa empresa se dedica a criar soluções que não só atendem às demandas de sustentabilidade e eficiência, mas também promovem o desenvolvimento social e econômico de nossos clientes. Com uma abordagem que transcende a tecnologia, alinhamos nossas iniciativas com os objetivos de nossos parceiros, contribuindo para um impacto positivo e duradouro. Quer saber mais? Entre em contato conosco e descubra como podemos construir juntos um amanhã melhor.</p>
        </div>
      </div>
      <div className={styles.imageSection}>
        <Image className={styles.quemSomos} src='/quem-somos.webp' alt='aplicativo sigas' fill quality={100} sizes='50vw' />
      </div>
    </section>
  )
}
