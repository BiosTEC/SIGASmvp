import React from 'react'
import styles from './mercadoCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

type mercadoCardProps = {
    img: string,
    alt: string,
    data: string,
    titulo: string,
    descricao: string,
    link: string
}


export default function MercadoCard({ img, alt, data, titulo, descricao, link }: mercadoCardProps) {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src={img} alt={alt} fill />
                </div>
                <span className={styles.date}>{data}</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{titulo}</h1>
                <p className={styles.desc}>{descricao}</p>
                <Link className={styles.link} href={link}>leia mais</Link>
            </div>
        </div>
    )
}
