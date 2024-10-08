import type { Metadata } from "next";
import React from 'react'
import styles from './contato.module.css'
import HeroImgHeader from '@/componentes/heroImageHeader/HeroImgHeader'
import Formulario from '@/componentes/form/Formulario'
import Input from '@/componentes/form/input/Input'
import BotaoForm from '@/componentes/form/botao/BotaoForm'
import { handleExemplo } from "@/lib/actions";

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Contato com o Sistema Inteligente para Gerenciamento de Ativos Sustentáveis',
};


export default function ContatoPage() {
  return (
    <section className={styles.section}>
      <HeroImgHeader img='/painelSolarVerde.webp' alt='imagem de painel solar' />
      <div className={styles.textContainer}>
        <h1>Contato</h1>
        <div className={styles.formContainer}>
          <div className={styles.formText}>
            <h3>Preencha o formulário e entraremos em contato prontamente.</h3>
            <p>Tire dúvidas, faça sugestões, comunique problemas e muito mais. Suporte 24h.</p>
            <p>Ou mande um E-mail para: contato@bios.tec.br</p>
          </div>
          <Formulario actionHook={handleExemplo} redirecionamento='/'>
            <Input type='text' nome='nome' placeholder='Nome' />
            <Input type='email' nome='email' placeholder='E-Mail' />
            <label htmlFor="duvidas"
              className={styles.duvidas} >
              <textarea placeholder='Dúvidas ou sugestões' name='duvidas' />
              <span className={styles.span}>Dúvidas ou sugestões</span>
            </label>
            <BotaoForm type='submit' texto='Enviar' />
          </Formulario>
        </div>
      </div>
    </section>
  )
}
