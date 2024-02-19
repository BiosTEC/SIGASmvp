import React from 'react'
import styles from './contato.module.css'
import HeroImgHeader from '@/componentes/heroImageHeader/HeroImgHeader'

export default function ContatoPage() {
  return (
    <section className={styles.section}>
      <HeroImgHeader img='/painelSolarVerde.webp' alt='imagem de painel solar' />
      <div className={styles.textContainer}>
        <h1>Contato</h1>
        <div className={styles.formContainer}>
          <div className={styles.formText}>
            <h3>Preencha o formulário e retornaremos em breve.</h3>
            <p>Tire dúvidas, faça sugestões, comunique problemas e muito mais. Suport 24h.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
