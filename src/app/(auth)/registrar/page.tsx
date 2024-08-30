import React from 'react'
import styles from './registrar.module.css'
import Formulario from '@/componentes/form/Formulario'
import Input from '@/componentes/form/input/Input'
import BotaoForm from '@/componentes/form/botao/BotaoForm'
import { cadastrar, handleGoogleLogin } from '@/lib/actions'
import Image from 'next/image'
import Link from 'next/link'


export default function RegistrarPage() {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>CADASTRAR</h1>
      <Formulario actionHook={cadastrar} redirecionamento='dashboard'>
        <Input type='text' nome='username' placeholder='Nome' />
        <Input type='text' nome='nomeEmpreendimento' placeholder='Nome da empresa' />
        <Input type='text' nome='cpfCnpj' placeholder='CPF ou CNPJ' />
        <Input type='text' nome='telefone' placeholder='Telefone' />
        <Input type='email' nome='email' placeholder='E-Mail' />
        <Input type='password' nome='password' placeholder='Senha' />
        <Input type='password' nome='passwordRepeat' placeholder='Repetir Senha' />
        <BotaoForm type='submit' texto='Cadastrar' />
      </Formulario>
      <Formulario actionHook={handleGoogleLogin} redirecionamento='dashboard'>
        <button className={styles.buttonGoogle}>
          <Image src='/icons/googleIcon.svg' alt='icone do google' width={25} height={25} />
          Entrar com o Google
        </button>
      </Formulario>
      <Link className={styles.login} href='/login'>Já tenho um cadastro</Link>
    </div>
  )
}
