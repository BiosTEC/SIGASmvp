import React from 'react'
import styles from './mercado.module.css'
import MercadoCard from '@/componentes/mercadoCard/MercadoCard'
import { getPosts } from '@/lib/data';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
// USANDO API PARA ACESSAR DATA
// const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next:{revalidate:1200}}) /* Atualiza e coloca os dados em cache a cada 1200s  */
//   if (!res.ok) {
//     throw new Error('deu ruim')
//   }
//   return res.json()
// }

export default async function MecadoPage() {
  // USANDO API PARA ACESSAR DATA
  // const posts = await getData()

  // ACESSANDO DATA SEM API
  const posts = await getPosts();
  return (
    <section className={styles.section}>
      {posts.map((post: Post) => (
        <div className={styles.post} key={post.id}>
          <MercadoCard
            post={post}
            link='/mercado/post'
            img='/bananas.webp'
            alt='imagem de banana'
          />

        </div>

      ))}
    </section>
  )
}
