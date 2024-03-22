import React from 'react'
import styles from './userChartCard.module.css'

type UserChartCard = {
    titulo: string
    valor: string

}

export default function UserChartCard({titulo, valor}: UserChartCard) {
    return (
        <div className={styles.container}>
            <div className={styles.data}>
                <h3>{titulo}</h3>
                <p>{valor}</p>
            </div>
        </div>
    )
}
