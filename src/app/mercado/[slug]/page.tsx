import React, { Suspense } from 'react'
import styles from './produtoPage.module.css'
import Image from 'next/image'
import ProdutoUser from '@/componentes/produtoUser/ProdutoUser';
import { getPost } from '@/lib/data';

interface ProdutoPageProps {
  params: {
    slug: string;
  };
}


// USANDO API PARA ACESSAR DATA
// const getData = async (slug: string) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, { cache: 'no-store' }) /* Não coloca os dados em cache  */
//   if (!res.ok) {
//     throw new Error('deu ruim')
//   }
//   return res.json()
// }
export const generateMetadata = async ({ params }: ProdutoPageProps) => {
  const { slug } = params
  const post = await getPost(slug)
  return {
    title: post.title,
    description: post.desc,
  }
}

export default async function ProdutoPage({ params }: ProdutoPageProps) {

  const { slug } = params
  // USANDO API PARA ACESSAR DATA
  // const post = await getData(slug)

  // ACESSANDO DATA SEM API
  const post = await getPost(slug)

  return (
    <div className={styles.section}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={post.img} alt='' fill sizes='30vw' />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post &&
            (<Suspense fallback={<div>Loading...</div>}>
              <ProdutoUser userId={post.userId.toString()} />
            </Suspense>)}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Anunciado em</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.desc}
          <button className={styles.buttonComprar}>COMPRAR</button>
        </div>
      </div>
    </div>
  )
}
