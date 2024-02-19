import React from 'react'
import Image from 'next/image'
import styles from './heroImgHeader.module.css'

export default function HeroImgHeader({ img, alt }: { img: any, alt: string }) {
    return (
        <div className={styles.heroImage}>
            <Image
                fill
                sizes="100vw"
                priority
                quality={100}
                alt={alt}
                src={img}
            ></Image>
        </div >


    )
}
