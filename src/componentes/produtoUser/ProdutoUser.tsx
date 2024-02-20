import styles from './produtoUser.module.css'
import { getUser } from '@/lib/data'
import Image from 'next/image'

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
            <Image className={styles.avatar} src={user.img? user.img: '/icons/avatar.svg'} alt='' width={50} height={50} />
            <div className={styles.texts}>
                <span className={styles.title}>Author</span>
                <span className={styles.username}>{user.username}</span>
            </div>
        </div>
    )
}
