import React, { cache } from 'react'
import styles from './produtoUser.module.css'
import { getUser } from '@/lib/data'

interface ProdutoUserProps {
    userId: string
}

// USANDO API PARA ACESSAR DATA
// const getData = async (userId: string) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     if (!res.ok) {
//         throw new Error('deu ruim')
//     }
//     return res.json()
// }

export default async function ProdutoUser({ userId }: ProdutoUserProps) {
    // USANDO API PARA ACESSAR DATA
    // const user = await getData(userId)

    // ACESSANDO DATA SEM API
    const user = await getUser(userId)
    return (
        <div className={styles.container}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user?.name}</span>
        </div>
    )
}
