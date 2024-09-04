import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.contato}>
        <p><Link href='mailto:contato@bios.tec.br'>Enviar E-mail</Link></p>
        <p>81 9 9999 9999</p>
        <p><Link href='https://www.linkedin.com/company/biostecbr/' target='_blank'>linkedin.com/biostecbr/</Link></p>
      </div>
      <div className={styles.copy}>
        <p>© 2024 BIOS. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
