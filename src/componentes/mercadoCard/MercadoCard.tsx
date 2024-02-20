import React from 'react'
import styles from './mercadoCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

type mercadoCardProps = {
    produto: any
}


export default function MercadoCard({ produto }: mercadoCardProps) {

    //FORMATANDO DATA PARA PT-br
    const formattedDate = produto?.createdAt
        ? new Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'short',
            timeStyle: 'short',
        }).format(new Date(produto.createdAt))
        : '';

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                {produto.img && <div className={styles.imgContainer}>
                    <Image className={styles.img} src={produto.img} alt='' fill sizes='50vw' priority />
                </div>}
                <span className={styles.date}>{formattedDate}</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{produto.title}</h1>
                <p className={styles.desc}>{produto.desc}</p>
                <Link className={styles.link} href={`/mercado/${produto.slug}`}>Saber Mais</Link>
            </div>
        </div>
    )
}
