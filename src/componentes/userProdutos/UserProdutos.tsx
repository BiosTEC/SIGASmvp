'use client'
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import styles from './userProdutos.module.css'

interface User {
    _id: string;
    email: string;
    username: string;
}
interface Produto {
    _id: string;
    title: string;
    desc: string;
}
const getUser = async (email: string) => {
    const res = await fetch(`http://localhost:3000/api/user/${email}`);
    if (!res.ok) {
        throw new Error('Erro ao buscar no banco de dados');
    }
    return res.json() as Promise<User>; // Define a resposta como uma Promise do tipo User
};

const getUserProdutos = async (userId: string) => {
    const res = await fetch(`http://localhost:3000/api/produto/${userId}`);
    if (!res.ok) {
        throw new Error('Erro ao buscar no banco de dados');
    }
    return res.json() as Promise<Produto[]>; // Define a resposta como uma Promise do tipo array de produtos
};

export default function UserProdutos() {
    const { data: session } = useSession(); // Desestrutura a propriedade 'data' de 'useSession'
    const [produtos, setProdutos] = useState<Produto[]>([]); // Define o estado inicial de 'produto' como null

    useEffect(() => {
        async function fetchUsuario() {
            if (session?.user?.email) { // Verifica se 'session' e 'session.user.email' existem
                try {
                    const userData = await getUser(session.user.email);
                    const produtoData = await getUserProdutos(userData._id);
                    setProdutos(produtoData);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        }
        fetchUsuario();
        // Adiciona 'session' como dependência do useEffect
    }, [session]);

    return (
        <>
            {produtos && Array.isArray(produtos) && (
                <ul className={styles.listaProdutos}>
                    {produtos.map(produto => (
                        <li className={styles.produto} key={produto._id}>
                            <span className={styles.titulo}>{produto.title}</span>
                            <span className={styles.desc}>{produto.desc}</span>
                        </li>
                    ))}
                </ul>
            )}

        </>
    );
}
