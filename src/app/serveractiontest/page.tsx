import React from 'react'
import { addProduto, deleteProduto } from '@/lib/actions'
import styles from './serverActionTest.module.css'

export default function () {



    return (
        <div className={styles.container}>
            <form action={addProduto}>
                <input type="text" placeholder='Título' name='title' />
                <input type="text" placeholder='description' name='desc' />
                <input type="text" placeholder='tag' name='slug' />
                <input type="text" placeholder='userId' name='userId' />
                <input type="date" placeholder='data do anúncio' name='createdAt' />
                <input type="text" placeholder='url da imagem' name='img' />
                <button>Create</button>
            </form>
            <form action={deleteProduto}>
                <input type="text" placeholder='Id do Produto' name='id' />
                <button>Delete</button>
            </form>
        </div>
    )
}
