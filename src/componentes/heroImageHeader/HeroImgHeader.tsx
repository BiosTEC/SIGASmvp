import React from 'react'
import Image from 'next/image'
import styles from './heroImgHeader.module.css'

export default function HeroImgHeader({ img }: { img: any }) {
    return (
        <div className={styles.heroImage}>
            <Image
                fill
                sizes="100vw"
                priority
                quality={100}
                placeholder='blur'
                alt='Imagem de estudantes'
                src={img}
                style={{
                    objectFit: 'cover',
                }}
            ></Image>
        </div>


    )
}
