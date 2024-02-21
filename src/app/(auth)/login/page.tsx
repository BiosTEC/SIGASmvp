import React from 'react'
import styles from './login.module.css'
import { login, handleGoogleLogin } from '@/lib/actions'
import Formulario from '@/componentes/form/Formulario'
import Input from '@/componentes/form/input/Input'
import BotaoForm from '@/componentes/form/botao/BotaoForm'
import Link from 'next/link'
import Image from 'next/image'

export default function LoginPage() {



  return (
    <div className={styles.section}>
      <h1 className={styles.title}>ENTRAR</h1>
      <Formulario actionHook={login} redirecionamento='/dashboard'>
        <div className={styles.inputContainer}>
          <Input type='email' nome='email' placeholder='E-Mail' />
        </div>
        <div className={styles.inputContainer}>
          <Input type='password' nome='password' placeholder='Senha' />
        </div>
        <BotaoForm type='submit' texto='Entrar' />
      </Formulario>
      <Formulario actionHook={handleGoogleLogin} redirecionamento='dashboard'>
        <button className={styles.buttonGoogle}>
          <Image src='/icons/googleIcon.svg' alt='icone do google' width={25} height={25} />
          Entrar com o Google
        </button>
      </Formulario>
      <Link className={styles.login} href='/registrar'>Não tenho um cadastro</Link>
      <Link className={styles.login} href='/registrar'>Esqueci a senha</Link>
    </div>
  )
}
