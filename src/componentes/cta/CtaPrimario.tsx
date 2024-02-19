import Link from 'next/link'
import React from 'react'
import styles from './cta.module.css'

type ctaProps = {
  texto: string,
  link: string
}

export default function CtaPrimario({ texto, link }: ctaProps) {
  return (
    <Link href={link} className={styles.ctaPrimario}>{texto}</Link>
  )
}
