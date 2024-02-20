import React from 'react'
import styles from './mercadoCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

type mercadoCardProps = {
    img: string,
    alt: string,
    link: string,
    post: any
}


export default function MercadoCard({ img, alt, link, post }: mercadoCardProps) {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src={img} alt={alt} fill />
                </div>
                <span className={styles.date}>{post.date}</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
                <Link className={styles.link} href={`/mercado/${post.id}`}>leia mais</Link>
            </div>
        </div>
    )
}
