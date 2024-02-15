import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
        <h2>Não Encontrado</h2>
        <p>Perdão, a página que você tentou acessar não existe.</p>
        <Link href='/'>Retornar a Home</Link>
    </div>
  )
}
