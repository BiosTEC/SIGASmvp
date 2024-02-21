import React from 'react'
import styles from './login.module.css'
import { handleGoogleLogin } from '@/lib/actions'

export default function LoginPage() {



  return (
    <div className={styles.section}>
      <form action={handleGoogleLogin}>
        <button >Entrar com Google</button>
      </form>
    </div>
  )
}
