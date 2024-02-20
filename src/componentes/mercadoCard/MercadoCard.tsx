import React from 'react'
import styles from './mercadoCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

type mercadoCardProps = {
    post: any
}


export default function MercadoCard({ post }: mercadoCardProps) {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                {post.img && <div className={styles.imgContainer}>
                    <Image className={styles.img} src={post.img} alt='' fill />
                </div>}
                <span className={styles.date}>{post.createdAt.toString().slice(4, 16)}</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.desc}</p>
                <Link className={styles.link} href={`/mercado/${post.slug}`}>Saber Mais</Link>
            </div>
        </div>
    )
}
