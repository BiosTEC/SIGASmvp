import React from 'react'
import styles from './heroVideo.module.css'

export default function HeroVideo() {
    return (
        <video src='/videos/SIGAShomepage.webm' className={styles.video} autoPlay loop muted>
        </video>
    )
}
