import React from 'react'
import styles from './produtoPage.module.css'
import Image from 'next/image'

export default function ProdutoPage() {
  return (
    <div className={styles.section}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src='/bananas.webp' alt='' fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}></h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src='/bananas.webp' alt='' width={50} height={50} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Date</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Anunciado em</span>
            <span className={styles.detailValue}>02.02.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a ullam repudiandae vero ex aperiam hic, animi numquam, quasi dolorem quod dolore odit repellendus earum corrupti accusantium? Quia, nesciunt consequuntur.
          <button className={styles.buttonComprar}>COMPRAR</button>
        </div>
      </div>
    </div>
  )
}
